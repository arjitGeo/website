package main

import (
	"html/template"
	"net/http"
)

func onlyHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "text/html")

	tmpl, err := template.ParseFiles("view/index.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	err = tmpl.ExecuteTemplate(w, "index.html", nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
