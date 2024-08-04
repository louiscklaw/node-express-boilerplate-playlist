highlight `customer` `Customer` `restaurant_user` `RestaurantUser`

prompt

```
if you found the input contains more than 1 function, split functions and consider function by function.
if you found more than 1 line in input, break the lines and consider line by line.
1. modify `customer` to `restaurant_user` according to naming convention
2. modify `Customer` to `RestaurantUser` according to naming convention
3. sometimes more than 1 occurrence at the same line,
4. if you found the word occurs inside code constants or variables, modify it as well
5. when you finish, revise your answer, try dry-run it before sending back to me,

thanks
```

./src/routes/v1/restaurant_user.route.js

<!--  -->

./src/validations/restaurant_user.validation.js
./src/controllers/restaurant_user.controller.js

<!--  -->

./src/services/restaurant_user.service.js
./src/models/restaurant_user.model.js
