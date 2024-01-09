package main

import "net/http"

func ajaxOnlyMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.Header.Get("X-Requested-With") != "XMLHttpRequest" || r.Method != http.MethodPost {
			http.Error(w, "404 not found", http.StatusNotFound)
			return
		}
		w.Header().Set("content-type", "text/html")
		next.ServeHTTP(w, r)
	})
}
