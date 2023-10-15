FROM golang:1.18.2-alpine3.16 as base

RUN apk update

WORKDIR /app

COPY . .

RUN rm -rf api
RUN go build -o api ./src/main.go


# Production
FROM alpine:3.16 as prod

WORKDIR /app

COPY --from=base /app/api .
COPY .env.production .env

EXPOSE 3333

CMD ["./api"]

