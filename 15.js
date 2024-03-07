/* Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

* Start with your program from Exercise 14.
Add a print statement at the end of your program stating the name of the guest who can’t make it.
* Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
* Print a second set of invitation messages, one for each person who is still in your list. */
var guests = ["Alice", "Bob", "Charlie"];
console.log("".concat(guests[1], " can't make it to the dinner."));
// Step 2: Replace the name of the guest who can't make it with the name of the new person you are inviting
guests[1] = "David"; // Replace "Bob" with "David"
// Step 3: Print a second set of invitation messages for each person who is still on your list
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
});
