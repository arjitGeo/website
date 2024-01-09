package main

import (
	"html/template"
	"net/http"
)

func handlerIndexView(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("view/fetch/index.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	err = tmpl.ExecuteTemplate(w, "index.html", "Joe")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func handlerAnotherView(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("view/fetch/another.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	err = tmpl.ExecuteTemplate(w, "another.html", "Joe2")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
