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
import cities from './Address/CitiesSlice'
import areas from './Address/areaSlice'
import product from './productSlice'
import logedDetails from './logedDetailsSlice'
import sell from './sellinbowslice'
import feedback from './feedbackSlice'
import question from './questionSlice'
import landPage from './LandingPageSlice'
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
      cities, 
      areas,
      product,
      sell,
      feedback,
      question, 
      landPage

  },
})