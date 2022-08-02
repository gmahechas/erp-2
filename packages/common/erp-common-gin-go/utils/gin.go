package utils

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type GinServer struct {
	Router *gin.Engine
}

func NewGinServer() *GinServer {
	server := &GinServer{}
	router := gin.New()
	router.GET("/ping", func(context *gin.Context) {
		context.String(http.StatusOK, "Hello World")
	})
	server.Router = router
	return server
}

func (server *GinServer) Run(address string) error {
	return (*server).Router.Run(address)
}
