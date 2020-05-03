# graphql_learning
graphql learning


Command used : 

fragment frienddetails on Friend{
  firstName
    lastName
}
query{
  one: getFriend(id:"5eaf0b7b6c50b34b6d794eae") {
    
   ...frienddetails
  } 
  two: getFriend(id:"5eaf129ad26da15328c46e33") {
    
   ...frienddetails
  } 
}


# mutation{
#   createFriend(input:{
#     firstName: "Reena"
#     lastName: "Kumar"
#     gender: FEMALE
#     age: 32
#     language: "english",
    
#   }){
#     id
#     firstName
#     lastName
#   }
# }

# mutation{
#   updateFriend(input:{
#     id: "5eaf0b7b6c50b34b6d794eae"
#     firstName: "Sohan"
    
#   }){
#     id
#     firstName
#     lastName
#   }
# }

# mutation{
#   deleteFriend(id:"5eaf04762d1e5046a954c5e8")
# }
