package middlewares

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func AuthenticationMiddleware() gin.HandlerFunc {
	return func(context *gin.Context) {
		fmt.Println("Authentication")
	}
}
