package routes

import (
	"ms-3-gingo/src/middlewares"
	"net/http"

	"github.com/gin-gonic/gin"
)

func InitEstateRoutes(router *gin.RouterGroup) {
	routes := router.Group("/estate")
	{
		routes.GET("/create/one", middlewares.AuthenticationMiddleware(), middlewares.AuthorizationMiddleware(), middlewares.ValidatorMiddleware(), createOneEstate)
	}
}

func createOneEstate(context *gin.Context) {
	context.String(http.StatusOK, "Hello estate")
}
