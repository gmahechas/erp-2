package routes

import (
	"github.com/gin-gonic/gin"
)

func InitRoutesV1(router *gin.RouterGroup) {
	routes := router.Group("/v1/3")
	{
		InitCountryRoutes(routes)
		InitEstateRoutes(routes)
	}
}
