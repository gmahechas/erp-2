package routes

import (
	ginGo "github.com/gmahechas/erp-common-gin-go/utils"
)

func InitCountryRoutes(router *ginGo.GinRouterGroup) {
	routes := router.Group("/country")
	{
		routes.GET("/create/one", ginGo.GinHandleFunc(createOneCountry))
		routes.GET("/update/one", ginGo.GinHandleFunc(updateOneCountry))
		routes.GET("/delete/one", ginGo.GinHandleFunc(deleteOneCountry))
		routes.GET("/search/one", ginGo.GinHandleFunc(searchOneCountry))
		routes.GET("/search/many", ginGo.GinHandleFunc(searchManyCountry))
	}
}

func createOneCountry(context *ginGo.GinContext) {
	context.String(200, "createOneCountry !!!")
}

func updateOneCountry(context *ginGo.GinContext) {
	context.String(200, "updateOneCountry !!!")
}

func deleteOneCountry(context *ginGo.GinContext) {
	context.String(200, "deleteOneCountry !!!")
}

func searchOneCountry(context *ginGo.GinContext) {
	context.String(200, "searchOneCountry !!!")
}

func searchManyCountry(context *ginGo.GinContext) {
	context.String(200, "searchManyCountry !!!")
}
