#include "arduino_secrets.h"
#include <Servo.h>

// Create a servo object
Servo myServo;

// Pin for servo control
int servoPin = 6;

void setup() {
  // Attach the servo to the control pin
  myServo.attach(servoPin);
}

void loop() {
  // Sweep from 0 to 180 degrees
  for (int angle = 0; angle <= 180; angle++) {
    myServo.write(angle);  // Set the servo to the specified angle
    delay(15);              // Wait for the servo to reach the position
  }

  // Sweep from 180 back to 0 degrees
  for (int angle = 270; angle >= 0; angle--) {
    myServo.write(angle);  // Set the servo to the specified angle
    delay(15);              // Wait for the servo to reach the position
  }
}

/*
  Since Led is READ_WRITE variable, onLedChange() is
  executed every time a new value is received from IoT Cloud.
*/
void onLedChange()  {
  // Add your code here to act upon Led change
}