# Fibbonici Clock
The Fibonacci clock lets you know the time more subtly, by changing colours and requiring you do some adding up.

The Fibonacci sequence is the sequence beginning 1, 1 and where each number is the sum of the previous two. Its first five digits are: 1, 1, 2, 3, 5

Which means that it is possible to use them to describe the twelve positions on a clock, and therefore tell the time in 5 minute intervals.

The squares in this clock have side length 1, 1, 2, 3, and 5. The squares lit up in red tell you the hour, and the squares lit up in green give you the minutes (in multiples of five). A square lit up in blue means it is to be added for both hour and minute. White squares are ignored.

# How to read the Clock?
for hours, you have red 5, red 1 and blue 3. 5 + 1 + 3 = 9 o’clock. For minutes: green 2 and blue 3. 2 + 3 = 5. Then 5 x 5 = 25minutes. So, the time is 9.25.

# How to run?
cd my-app
npm install
npm start


