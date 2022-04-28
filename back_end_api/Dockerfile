FROM adoptopenjdk/openjdk11:alpine-jre
ADD ./target/students_recovery_api-0.0.1-SNAPSHOT.jar students_recovery_api-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "students_recovery_api-0.0.1-SNAPSHOT.jar"]
