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

export default   configureStore({
  reducer: {
      auth,
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

  },
})