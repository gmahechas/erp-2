package helpers

/* ************ AppConfig ************ */
type AppConfig struct {
	Name     string
	Port     int
	Endpoint string
}

/* ************ Databases ************ */

type DatabasesConfig struct {
	Mongo MongoConfig
}

type MongoConfig struct {
	Uri string
}

type RedisConfig struct {
	Url string
}

/* ************ Session ************ */
type SessionConfig struct {
	Redis        RedisConfig
	CookieName   string
	CookieSecret string
}

/* ************ Auth ************ */
type AuthConfig struct {
	Jwt JwtConfig
}

type JwtConfig struct {
	PrivateKey string
	PublicKey  string
}

/* ************ Microservices ************ */
type Ms0 struct {
	App     AppConfig
	Session SessionConfig
	Auth    AuthConfig
}

type Ms1 struct {
	App       AppConfig
	Databases DatabasesConfig
	Auth      AuthConfig
}

type Ms3 struct {
	App       AppConfig
	Databases DatabasesConfig
	Auth      AuthConfig
}

type Ms4 struct {
	App       AppConfig
	Databases DatabasesConfig
	Auth      AuthConfig
}

/* ************ Config ************ */
type Config struct {
	Environment string `json:"environment"`
	Ms0         Ms0    `json:"ms-0"`
	Ms1         Ms1    `json:"ms-1"`
	Ms3         Ms3    `json:"ms-3"`
	Ms4         Ms4    `json:"ms-4"`
}
