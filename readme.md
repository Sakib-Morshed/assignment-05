### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

Ans :

১)
getElementById শুধুমাত্র কোন একটা এলিমেন্টের আইডিকে নিবে এবং একজনের আইডি একটাই থাকতে পারে একই নামের অন্য কারো আইডি হইতে পারবে না।
getElementsByClassName এটা একাধিক এলিমেন্টের একই হইতে পারবে। মানে কমন হিসেবে এটা কে ব্যবহার করতে পারবো৷
querySelector দিয়ে কোনো id,class,tag বা css সিলেক্টর কে ধরতে পারবো এবং এক্ষেত্রে একাধিক এলিমেন্টে একই ক্লাস থাকলে শুধু প্রথম টাকেই দিবে ।
querySelectorAll এটা querySelector এর মতোই কিন্তু এটা সকল এলিমেন্ট কেই দিবে nodelist হিসেবে।

২) document. CreateElement("ট্যাগ এর নাম") দিয়ে আগে এলিমেন্ট বানাবো তারপর . innerHTML =`কনেটেন্ট` লিখবো।
তারপর parent এর সাথে .appendChild(child ভ্যারিয়েবল এর নাম দিবো) তাহলে এটা প্যারেন্ট div এর ভিতরে তৈরি হয়ে যাবে।
৩)Event Bubbling বলতে যখন কোনো child এ ইভেন্ট তৈরি করা হয় তখন child থেকে parent হয়ে উপরে দিকে উঠে যায়।এই প্রক্রিয়াকেই Event Bubbling বলে।
৪)Event delegation মূলত Event Bubbling এর উল্টো।এটা parent এ কাজ করে, তারপর ওখান থেকে child এ যায়।অর্থাৎ প্রতিটি child এ আলাদা আলাদা ভাবে event না দিয়ে parent কে event দিয়ে দিলে এটি child পর্যন্ত নিয়ে যায়।

এটার অন্যতম সুবিধা হলো এটা কোডকে ছোট করে এবং নতুন child এলেও এটি কাজ করে।
৫)preventDefault() মূলত কোন ব্রাউজারের ডিফল্ট কাজকে থামিয়ে দেয়।
stopPropagation() ইভেন্ট কে parent এ উঠতে দেয় না শুধু মাত্র child এই কাজ করে।
এই দুইটি আলাদা আলাদা কাজে ব্যবহার হয় তবে একসাথেও বসতে পারে।
