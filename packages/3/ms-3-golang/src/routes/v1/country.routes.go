package routes

import (
	"fmt"
	"net/http"
)

func InitCountryRoutes() *http.ServeMux {
	mux := http.NewServeMux()
	mux.HandleFunc("/create/one", createOneCountry)
	return mux
}

func createOneCountry(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "createOneCountry!")
}
