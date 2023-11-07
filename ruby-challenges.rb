# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.



reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def even_or_odd (number)
    # define function to take in a number
    if number.even? == true
        "#{number} is even"
    else
        "#{number} is odd"
    end
    # use conditional with built-in method to find even and odd numbers
    #implicit return with string interpolation 
end

p even_or_odd reposts1
# Output --> '7 is odd'
p even_or_odd reposts2
# Output --> '42 is even'
p even_or_odd reposts3
# Ouput --> '221 is odd'

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels (string)
    # define function to take in string
    string.delete "aeiouAEIOU"
    # use built-in method to delete all lowercase and uppercase vowels
end

p no_vowels beatles_album1
# output: 'Rbbr Sl'
p no_vowels beatles_album2
# output: 'Sgt Pppr'
p no_vowels beatles_album3


# Pseudo code:

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome (string)
    # define function to take in string
    string.downcase!
    # permanently lowercase all letters in string
    if string == string.reverse
        # conditional finding is string is equal to string reversed
        "#{string.capitalize} is a palindrome"
    else
        "#{string.capitalize} is not a palindrome"
        # using string interpolation with built-in method to return original string
    end
end

p palindrome palindrome_test_case1
# output: 'Racecar is a palindrome'
p palindrome palindrome_test_case2
# output: 'LEARN is not a palindrome'
p palindrome palindrome_test_case3
# output: 'Rotator is a palindrome'
