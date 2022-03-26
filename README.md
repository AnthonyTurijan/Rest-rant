#Project Rest-rant

Rest-Rant is an app where users can review restaurants

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/places` | Index page listing all places |
| POST | `/places` | Create a new place |
| GET | `/places/new` | New form for a place |
| GET | `/places/:id` | Show one place in detail (Associated rants, new rant form, delete rant button) |
| PUT | `/places/:id` | Make changes to existing place |
| GET | `/places/:id/edit` | Edit form for a place |
| DELETE | `/places/:id` | Delete a place |
| POST | `/places/:id/rant` | Add rant to a place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant |
| GET | `*` | 404 page