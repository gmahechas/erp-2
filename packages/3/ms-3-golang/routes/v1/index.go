package v1

import (
	"net/http"
)

func InitRoutesV1() *http.ServeMux {
	mux := http.NewServeMux()
	mux.Handle("/country/", http.StripPrefix("/country", InitCountryRoutes()))
	mux.Handle("/estate/", http.StripPrefix("/estate", InitEstateRoutes()))
	return mux
}
