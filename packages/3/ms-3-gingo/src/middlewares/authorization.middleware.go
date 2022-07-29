package middlewares

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func AuthorizationMiddleware() gin.HandlerFunc {
	return func(context *gin.Context) {
		fmt.Println("Authorization")
	}
}
