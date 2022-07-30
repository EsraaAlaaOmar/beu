import { configureStore } from '@reduxjs/toolkit'
import auth from './authslice'
import discount from './discountslice'
import offers from './offerSlice'
import admins from './adminSlice'
import users from './usersSlice'
import collections from './collectionsSlice'
import messages from './messagesSlice'
import sizes from './sizesSlice'
import countries from './Address/counteriesSlice'
import product from './productSlice'
import logedDetails from './logedDetailsSlice'
import sell from './sellinbowslice'
import feedback from './feedbackSlice'
import question from './questionSlice'
import landPage from './LandingPageSlice'
import orders from './orderSlice'
import brand from './brandSlice'
import clientOrders from './clientSide/ordersSlice'
import clientProducts from './clientSide/clientProducts'
import clientbrands from './clientSide/clientbrands'
import favourite from './clientSide/favouriteSlice'
import card from './clientSide/cardSlice'
import clientFeedbackslice from './clientSide/clientFeedbackSlice'
export default   configureStore({
  reducer: {
      auth,
      logedDetails,
      discount,
      offers, 
      admins, 
      users, 
      collections,
      messages, 
      sizes, 
      countries,
      product,
      sell,
      feedback,
      question, 
      landPage, 
      orders,
      brand, 
      clientOrders,
      clientProducts, 
      clientbrands,
      favourite, 
      card,
      clientFeedbackslice

  },
})