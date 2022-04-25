FROM openjdk:11
ARG JAR_FILE=./build/libs/star-0.0.1-SNAPSHOT.jar
copy ${JAR_FILE} star.jar
ENTRYPOINT ["java", "-jar", "star.jar"]
EXPOSE 9999