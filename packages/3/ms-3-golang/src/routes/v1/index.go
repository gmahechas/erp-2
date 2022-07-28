package routes

import (
	"net/http"
)

func InitRoutesV1() *http.ServeMux {
	muxV1 := http.NewServeMux()
	muxV1.Handle("/country/", http.StripPrefix("/country", InitCountryRoutes()))
	muxV1.Handle("/estate/", http.StripPrefix("/estate", InitEstateRoutes()))
	return muxV1
}
