class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def semi_perimeter(self):
        return self.width + self.length

    def perimeter(self):
        return self.semi_perimeter() * 2
    
    def area(self):
        return self.length * self.width

rectangle = Rectangle(10, 5)
print(f"Semi perimeter is: {rectangle.semi_perimeter()}")
print(f"Perimeter is: {rectangle.perimeter()}")
print(f"Area is: {rectangle.area()}")
