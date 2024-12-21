# import unittest

# def toFarenheit(c):
#     return(c*9/5) +32

# class call_tool(unittest.TestCase):
#     def test_function(self):
#         self.assertEqual(toFarenheit(-40), 37)

# if __name__ == "__main__" :
#     unittest.main()


import unittest
import re

def validEmail(email):
    pattern= r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    if re.match(pattern, email):
        return True
    return False

class call_tool(unittest.TestCase):

    def test_valid_email(self):
        self.assertEqual(validEmail("diocanstoptime@gmail.com"))

    def test_invalid_email (self):
        self.assertEqual(validEmail("diocanstoptimegmailcom"))
        
if __name__ == "__main__" :
    unittest.main()