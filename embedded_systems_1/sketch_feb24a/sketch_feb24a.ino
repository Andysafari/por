// Define constants for pin numbers
const int ledPin = 9;          // Pin for the LED (PWM capable)
const int sensorPin = A0;      // Pin for the analog sensor (e.g., light sensor)

// Variable to store the sensor value
int sensorValue = 0;

void setup() {
  // Initialize the LED pin as an output
  pinMode(ledPin, OUTPUT);
  
  // Initialize serial communication for debugging
  Serial.begin(9600);
}

void loop() {
  // Read the analog value from the sensor
  sensorValue = analogRead(sensorPin);
  
  // Map the sensor value to a PWM range (0 to 255)
  int brightness = map(sensorValue, 0, 1023, 0, 255);
  
  // Write the brightness value to the LED using analogWrite
  analogWrite(ledPin, brightness);
  
  // Print the sensor value and brightness to the Serial Monitor
  Serial.print("Sensor Value: ");
  Serial.print(sensorValue);
  Serial.print(" | Brightness: ");
  Serial.println(brightness);
  
  // Add a small delay for stability
  delay(100);
}
