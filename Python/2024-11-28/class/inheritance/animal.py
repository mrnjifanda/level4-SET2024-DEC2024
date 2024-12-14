class Animal:

    def __init__(self, name, food):
        self.name = name
        self._food = food

    def speak(self):
        print(f"{self.name} speak ...")

class Dog(Animal):

    def __init__(self, name, food, race):
        super().__init__(name, food)
        self.race = race
    
    def get_food(self):
        return self._food

dog = Dog("Idriss", "Mouse")
dog.speak()