package v1

import (
	"fmt"
	"net/http"
)

func InitEstateRoutes() *http.ServeMux {
	mux := http.NewServeMux()
	mux.HandleFunc("/create/one", createOneEstate)
	return mux
}

func createOneEstate(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "createOneEstate!")
}
