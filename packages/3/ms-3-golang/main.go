package main

import (
	"fmt"
	"ms-3-golang/routes"
	"net/http"
)

func main() {
	server := &http.Server{
		Addr:    ":50003",
		Handler: routes.InitRoutes(),
	}
	fmt.Println(`ms-3 is runnig on: http://localhost:50003`)
	server.ListenAndServe()
}
