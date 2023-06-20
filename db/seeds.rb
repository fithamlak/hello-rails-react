greetings = ['Hello', 'Hi', 'Bonjour', 'Hola', 'Ciao']

greetings.each do |greeting|
  Message.create(content: greeting)
end
