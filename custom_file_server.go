package main

import (
	"net/http"
	"os"
	"path/filepath"
)

type customFileServer struct {
	root http.FileSystem
}

func (cfs customFileServer) Open(name string) (http.File, error) {
	f, err := cfs.root.Open(name)
	if err != nil {
		return nil, err
	}

	return customFile{f}, nil
}

type customFile struct {
	http.File
}

func (cf customFile) Readdir(count int) ([]os.FileInfo, error) {
	files, err := cf.File.Readdir(count)
	for _, f := range files {
		if f.IsDir() {
			continue
		}

		switch filepath.Ext(f.Name()) {
		case ".css":
			f.(*customFileInfo).contentType = "text/css"
		case ".js":
			f.(*customFileInfo).contentType = "application/javascript"
		}
	}

	return files, err
}

type customFileInfo struct {
	os.FileInfo
	contentType string
}

func (cfi *customFileInfo) Sys() interface{} {
	type header struct {
		ContentType string
	}

	return &header{
		ContentType: cfi.contentType,
	}
}
