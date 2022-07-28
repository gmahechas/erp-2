package routes

import (
	v1 "ms-3-golang/routes/v1"
	"net/http"
)

func InitRoutes() *http.ServeMux {
	mux := http.NewServeMux()
	v1Mux := http.NewServeMux()
	v1Mux.Handle("/v1/3/", http.StripPrefix("/v1/3", v1.InitRoutesV1()))
	mux.Handle("/rest/", http.StripPrefix("/rest", v1Mux))
	return mux
}
