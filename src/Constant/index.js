export const createAction = (val) => ({
  REQUEST: `${val}_REQUEST`,
  SUCCESS: `${val}_SUCCESS`,
  ERROR: `${val}_ERROR`,
  RESET: `${val}_RESET`,
});

export const RetailerHeaderName=[
  { name: "displayId", 
  displayName: "RetailerId" 
 
},
  {
    name: "companyName",
    displayName: "RetailerName",
  },
  { name: "address", displayName: "Location" },
  {
    name: "joinedDate",

    displayName: "joinedDate",
  },
  {
    name: "numberOfStoreLocations",

    displayName: "No of Locations",
  },
  {
    name: "monthlySalesSort",
    displayName: "No of Orders",
  },

]

export const DistributorHeaderName=[
  {
    name: "displayId",
    displayName: "DistributorId",
    sort: true,
  },
  {
    name: "companyName",
    displayName: "DistributorName",
    sort: true,
  },
  {
    name: "address",
    displayName: "Location",
    sort: false,
  },
  {
    name: "ENVB",
    displayName: "ERP/INV System",
  },
  {
    name: "noOfMappedRetailers",
    displayName: "Linked Retailers",
  },
  {
    name: "monthlyOrders",
    displayName: "Monthly Orders",
  },
  {
    name: "monthlySales",
    displayName: "monthlySales",
  },
]
// export const sidebarData = [
//   { name: "Distributor", path: "/Distributor" },
//   { name: "Retailer", path: "/Retailer" },
// ];



export const AdminData = [
  { name: "Dashboard", path: "/Dashboard" },
  { name: "Distributor", path: "/Distributor" },
  { name: "Exchange", path: "/Exchange" },
  { name: "Retailer", path: "/Retailer" },
  { name: "Reports", path: "/Reports" },

]

export const DistributorData=[
  { name: "Dashboard", path: "/Dashboard" },
  { name: "Exchange", path: "/Exchange" },
  { name: "Retailer", path: "/Retailer" },
  { name: "Orders", path: "/ddOrder" },
  { name: "Platform Fees", path: "/ssfee" },
  { name: "Reports", path: "/Distributor/reports" }
]

export const RetailerData=[
  { name: "Dashboard", path: "/Retailer" },
  { name: "Orders", path: "/Retailer" },
  { name: "Distributors", path: "/Retailer" },
  { name: "Platform Fees", path: "/Retailer" },
  { name: "Reports", path: "/Retailer" }
]

export const token ="eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTQxMzgyNjEsIm5vbmNlIjoiMDE4ZjFhMDctMDFhOS03ODIwLTkzNTAtODNmNjg5NjNjMThkIiwiaWF0IjoxNzE0MTM0NjYxLCJhdXRoX3RpbWUiOjE3MTQxMjY4OTgsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxNDEzNDY2MX0.JhlseQP6RAQzDDWPLS9YsAUThodFYsPtYurKUh1QMDSS6U0W8pAYb6K4dXIJyscmhKyIOeNWGyDvVM5NBWOWVZ5Fgs3YII1jWfjmmIGgfnrVtKmJREEEXI77UAQaCtD5BgChOaLsYaL9FIjGPqqZ2hTxp__r-5jui8lwhMpUnXw73kNl2ho8ZN8IAHng-BvuxgRl5iuCrFxgK6y4Y7oBal8dYwq5DTB8Fvy2d_Rd0M62vFPCj2WRYG7zPYPVrvBj7FZkBMNkAAFiZ26UReoCZ_6Oyel_lAIb5NXVhLvWQGjWEU_fCgoTl7BsIkWMFxZMEUdVfMJ30onn99n-J3R2JA"