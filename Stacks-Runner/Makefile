.PHONY: dev build test lint clean install
install:
	cd frontend && npm install
dev:
	cd frontend && npm run dev
build:
	cd frontend && npm run build
test:
	cd frontend && npm run test
lint:
	cd frontend && npm run lint
clean:
	rm -rf frontend/dist frontend/node_modules
docker-build:
	docker build -t stacks-runner .
docker-run:
	docker run -p 3000:80 stacks-runner
