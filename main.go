package main

import (
	"fmt"
	"net/http"

	gh "github.com/gorilla/handlers"
	gm "github.com/gorilla/mux"
)

func main() {
	r := gm.NewRouter().StrictSlash(true)

	r.Use(gh.CORS(
		gh.AllowedOrigins([]string{"https://*", "http://*"}),
		gh.AllowedMethods([]string{http.MethodGet, http.MethodPost}),
		gh.AllowedHeaders([]string{"*"}),
		gh.ExposedHeaders([]string{"Link"}),
		gh.AllowCredentials(),
		gh.MaxAge(300),
	))

	r.HandleFunc("/", onlyHandler).Methods(http.MethodGet)
	r.HandleFunc("/another", onlyHandler).Methods(http.MethodGet)

	s := r.PathPrefix("/html").Subrouter()
	s.Use(ajaxOnlyMiddleware)

	s.HandleFunc("/", handlerIndexView)
	s.HandleFunc("/another", handlerAnotherView)

	fs := http.FileServer(customFileServer{http.Dir("./static")})
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", fs))

	srv := &http.Server{
		Handler: r,
		Addr:    ":8080",
	}

	fmt.Println("Listening at http://127.0.0.1:8080")
	fmt.Println(srv.ListenAndServe())
}
