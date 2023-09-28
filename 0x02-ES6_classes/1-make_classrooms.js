import ClassRoom  from './0-classroom';

export default function initializeRooms() {
  const class_1 = new ClassRoom(19);
  const class_2 = new ClassRoom(20);
  const class_3 = new ClassRoom(34);
  return [class_1, class_2, class_3];
}
