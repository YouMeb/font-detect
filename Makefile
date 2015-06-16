BIN := ./node_modules/.bin
DUO := $(BIN)/duo

SRC := ./*.js ./lib/*.js

build: build/index.js

build/index.js: node_modules $(SRC)
	@$(DUO) --standalone=detectFont index.js
	
node_modules:
	@npm i

clean:
	@-rm -rf build
