class Animal:

    def __init__(self, name, specie):
        self.name = name
        self.specie = specie
    
    def speak(self):
        print(f"{self.name} say hello to you")

dog = Animal('Bless', 'dog')
cat = Animal('Laure', 'cat')

dog.speak()
cat.speak()