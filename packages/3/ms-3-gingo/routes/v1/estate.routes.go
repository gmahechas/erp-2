package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func InitEstateRoutes(router *gin.RouterGroup) {
	routes := router.Group("/estate")
	{
		routes.GET("/create/one", createOneEstate)
	}
}

func createOneEstate(context *gin.Context) {
	context.String(http.StatusOK, "Hello estate")
}
