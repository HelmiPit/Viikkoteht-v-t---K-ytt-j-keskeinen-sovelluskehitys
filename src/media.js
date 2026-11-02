/**
 * Media items mock data store and helper functions
 * @module media
 */

const mediaItems = [
  {
    media_id: 9632,
    filename: 'ffd8.jpg',
    filesize: 887574,
    title: 'Favorite drink',
    description: '',
    user_id: 1606,
    media_type: 'image/jpeg',
    created_at: '2023-10-16T19:00:09.000Z',
  },
  {
    media_id: 9626,
    filename: 'dbbd.jpg',
    filesize: 60703,
    title: 'Miika',
    description: 'My Photo',
    user_id: 3671,
    media_type: 'image/jpeg',
    created_at: '2023-10-13T12:14:26.000Z',
  },
  {
    media_id: 9625,
    filename: '2f9b.jpg',
    filesize: 30635,
    title: 'Aksux',
    description: 'friends',
    user_id: 260,
    media_type: 'image/jpeg',
    created_at: '2023-10-12T20:03:08.000Z',
  },
  {
    media_id: 9592,
    filename: 'f504.jpg',
    filesize: 48975,
    title: 'Desert',
    description: '',
    user_id: 3609,
    media_type: 'image/jpeg',
    created_at: '2023-10-12T06:59:05.000Z',
  },
  {
    media_id: 9590,
    filename: '60ac.jpg',
    filesize: 23829,
    title: 'Basement',
    description: 'Light setup in basement',
    user_id: 305,
    media_type: 'image/jpeg',
    created_at: '2023-10-12T06:56:41.000Z',
  },
];

/**
 * Get all media items with optional limit parameter
 * @param {number|string} [limit] - Maximum items to return
 * @returns {Array<Object>} List of media items
 */
const getAllMediaItems = (limit) => {
  if (limit) {
    const numLimit = parseInt(limit, 10);
    if (!isNaN(numLimit) && numLimit > 0) {
      return mediaItems.slice(0, numLimit);
    }
  }
  return mediaItems;
};

/**
 * Get media item by ID
 * @param {number|string} id - Media item ID
 * @returns {Object|undefined} Found item or undefined
 */
const getMediaItemById = (id) => {
  return mediaItems.find((item) => item.media_id === Number(id));
};

/**
 * Add a new media item
 * @param {Object} item - New media item payload
 * @returns {Object} Newly created media item
 */
const addMediaItem = (item) => {
  const newId = mediaItems.length > 0 ? mediaItems[0].media_id + 1 : 1000;
  const newItem = {
    media_id: newId,
    filename: item.filename,
    filesize: item.filesize || 0,
    title: item.title,
    description: item.description || '',
    user_id: item.user_id,
    media_type: item.media_type || 'image/jpeg',
    created_at: new Date().toISOString(),
  };
  mediaItems.unshift(newItem);
  return newItem;
};

/**
 * Modify existing media item
 * @param {number|string} id - Media item ID
 * @param {Object} modifiedItem - Fields to update
 * @returns {Object|boolean} Updated item or false if not found
 */
const modifyMediaItem = (id, modifiedItem) => {
  const itemIndex = mediaItems.findIndex((item) => item.media_id === Number(id));
  if (itemIndex > -1) {
    mediaItems[itemIndex] = { ...mediaItems[itemIndex], ...modifiedItem };
    return mediaItems[itemIndex];
  }
  return false;
};

/**
 * Delete media item from mock data array
 * @param {number|string} id - ID of the media item
 * @returns {boolean} Operation success
 */
const deleteMediaItem = (id) => {
  const itemIndex = mediaItems.findIndex((item) => item.media_id === Number(id));
  if (itemIndex > -1) {
    mediaItems.splice(itemIndex, 1);
    return true;
  }
  return false;
};

export {
  addMediaItem,
  getAllMediaItems,
  getMediaItemById,
  modifyMediaItem,
  deleteMediaItem,
};