#include <iostream>
#include <string> // Required for using strings

void batterylife() {
std::cout << "checking battery....\n:";  
}

int main() {
    // Creating variables with different data types
    int numberOfLegs = 8;                  // Integer to represent the spider robot's legs
    std::string robotName = "SpiderBot";   // String to store the robot's name
    float batteryLevel = 75.5;             // Floating-point to represent battery percentage

    // Display robot details
    std::cout << "Robot Name: " << robotName << std::endl;
    std::cout << "Number of Legs: " << numberOfLegs << std::endl;
    std::cout << "Battery Level: " << batteryLevel << "%" << std::endl;

    batterylife();
    // Conditional statement to check battery status
    if (batteryLevel > 50.0) {
        std::cout << robotName << " is ready to walk!" << std::endl;
    } else if (batteryLevel > 20.0) {
        std::cout << robotName << " has low battery. Please recharge soon!" << std::endl;
    } else {
        std::cout << robotName << " cannot walk. Battery critically low!" << std::endl;
    }

    return 0;
}
