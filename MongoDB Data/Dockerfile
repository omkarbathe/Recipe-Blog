# Use the official MongoDB image
FROM mongo:latest

# Optional: Set environment variables for the root user
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_DATABASE=recipeblog

# Copy the initialization script into the container
# Scripts in this folder are executed in alphabetical order
COPY init-db.js /docker-entrypoint-initdb.d/

# Note: If your JSON files are huge, you'd typically use mongoimport 
# in a shell script, but for standard blog data, JS is cleaner.