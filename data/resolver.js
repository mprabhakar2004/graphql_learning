import mongoose from 'mongoose';
import {Friends} from './dbconnector'
// Resolver map
export const resolvers = { 
    Query:{
        getFriend:(root, {id}) => {
           return new Promise((resolve,object)=>{
               Friends.findById(id, (err,friend)=>{
                    if(err) PromiseRejectionEvent(err)
                    else resolve(friend)
               });
           });
        }
    },
    Mutation:{
        createFriend: (root, {input}) =>{
           const newFriend = new Friends({
               firstName: input.firstName,
               lastName: input.lastName,
               gender: input.gender,
               age: input.age,
               language: input.language,
               email: input.email,
               contacts: input.contacts
           });
           newFriend.id = newFriend._id;
           return new Promise((resolve, object)=>{
               newFriend.save((err)=>{
                   if(err) PromiseRejectionEvent(err)
                   else resolve(newFriend)
               })
           })
        },
        updateFriend:(root, {input}) => {
            return new Promise((resolve, object)=>{
                Friends.findOneAndUpdate({_id:input.id}, input, {new:true}, (err, friend)=>{
                    if(err) PromiseRejectionEvent(err)
                    else resolve(friend)
                })
            })
        },
        deleteFriend:(root, {id})=>{
            return new Promise((resolve, object)=>{
                Friends.remove({_id:id}, (err)=>{
                    if(err) PromiseRejectionEvent(err)
                    else resolve("Deleted successfully")
                })
            })
        }
    }
};