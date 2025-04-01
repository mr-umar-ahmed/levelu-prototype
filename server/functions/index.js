// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp();

// Complete Task Function
exports.completeTask = functions.https.onCall(async (data, context) => {
  const { taskId } = data;

  try {
    // Step 1: Get the task document
    const taskDoc = await admin.firestore().collection('tasks').doc(taskId).get();
    if (!taskDoc.exists) {
      throw new Error('Task not found');
    }

    const taskData = taskDoc.data();
    const userId = taskData.userId;

    // Step 2: Update the task (mark as completed)
    await admin.firestore().collection('tasks').doc(taskId).update({ completed: true });

    // Step 3: Increment the user's XP
    await admin.firestore().collection('users').doc(userId).update({
      xp: admin.firestore.FieldValue.increment(10),
    });

    return { message: 'Task completed successfully!' };
  } catch (error) {
    console.error('Error completing task:', error);
    throw new functions.https.HttpsError('internal', 'Failed to complete task');
  }
});