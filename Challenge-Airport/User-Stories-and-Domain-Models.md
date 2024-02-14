
**User Story 1**: As an Air Traffic Controller (ATC), I want to be able to find out the maximum capacity of the number of planes that can be at the airport simultaneously, so that I could direct planes accordingly and safely without exceeding that capacity.

|Objects  | Properties       | Messages      | Output  |
|---------|------------------|---------------|---------|
| Airport | capacity @‌number | getCapacity() | @‌number |
|         |                  | setCapacity() | @void   |


**User Story 2**: As an ATC, I would like to be able to instruct a plane to land if the airport isn't full and it isn't already at the airport, so that I could succeed in my job making sure that planes are landing safely at the airport.

| Objects | Properties                 | Messages          | Outputs |
| ------- | -------------------------- | ----------------- | ------- |
| Plane   | plane @String              |                   |         |
| Airport | planes @Array[@Plane]      | instructToLand()  | @Void   |


**User Story 3**: As an ATC, I would like to be able to instruct a plane to take off as long as it is present at the airport, so that I could effectively do my job ensuring planes can navigate through the airport safely.

| Objects | Properties                 | Messages          | Outputs |
| ------- | -------------------------- | ----------------- | ------- |
| Airport | planes @Array[@Plane]     | takeOff(@Plane)    | @Void   |
| Plane   | plane @String              |                   |         |


**User Story 4**: As an ATC, I would like planes to not be instructed to land if the weather is stormy, so that the safety of planes is not compromised.

| Objects | Properties                 | Messages               | Outputs |
| ------- | -------------------------- | ---------------------- | ------- |
| Airport | planes @Array[@Plane]      | instructToLand(@Plane) | @Void   |
|         | weather @String            | setWeather(weather)    |         |
| Plane   | plane @String              |                        |         |


**User Story 5**: As an ATC, I would like planes to not be instructed to take off if the weather is stormy, so that the safety of planes is not compromised.

| Objects | Properties                 | Messages               | Outputs |
| ------- | -------------------------- | ---------------------- | ------- |
| Airport | planes @Array[@Plane]      | takeOff(@Plane)        | @Void   |
|         | weather @String            | setWeather(weather)    |         |
| Plane   | plane @String              |                        |         | 


My Kanban board used for the management of this project:
![Alt text](<Screenshot 2024-01-21 at 22.30.48.png>)


One of the cards on my Kanban board that I created to manage this project, with user story, domain model and tests for the feature:
![Alt text](<Screenshot 2024-01-21 at 22.27.56.png>)

