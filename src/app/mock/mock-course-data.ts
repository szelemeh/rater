import {Course} from '../models/Course'
import {ClassForm} from '../models/Course'

export class MockCourseData {
    public static Courses: Course[] = 
    [
    {
        'id': 1,
        'courseName': 'English',
        'numberOfEtcs': 0,
        'semester': 2,
        'classForm': ClassForm.EXERCISE,
        'maxStudentNumber': 80,
        'rate': 3.5,
        'imagePath' : 'https://png.pngtree.com/svg/20161206/course_1312462.png',
        'description': 'This is an example description of a course'
    },
    {
        'id': 2,
        'courseName': 'Math',
        'numberOfEtcs': 6,
        'semester': 1,
        'classForm': ClassForm.EXERCISE,
        'maxStudentNumber': 80,
        'rate': 2.0,
        'imagePath' : 'https://png.pngtree.com/svg/20161206/course_1312462.png',
        'description': 'This is an example description of a course'
    },
    {
        'id': 3,
        'courseName': 'Unix',
        'numberOfEtcs': 3,
        'semester': 1,
        'classForm': ClassForm.LAB,
        'maxStudentNumber': 60,
        'rate': 4.0,
        'imagePath' : 'https://png.pngtree.com/svg/20161206/course_1312462.png',
        'description': 'This is an example description of a course'
    },
    {
        'id': 4,
        'courseName': 'Introduction to Web Applications',
        'numberOfEtcs': 3,
        'semester': 3,
        'classForm': ClassForm.LAB,
        'maxStudentNumber': 80,
        'rate': 5.0,
        'imagePath' : 'https://png.pngtree.com/svg/20161206/course_1312462.png',
        'description': 'This is an example description of a course'
    },
    {
        'id': 5,
        'courseName': 'Objective Programming',
        'numberOfEtcs': 3,
        'semester': 3,
        'classForm': ClassForm.LAB,
        'maxStudentNumber': 80,
        'rate': 3.5,
        'imagePath' : 'https://png.pngtree.com/svg/20161206/course_1312462.png',
        'description': 'This is an example description of a course'
    },
    {
        'id': 6,
        'courseName': 'Function Programming',
        'numberOfEtcs': 2,
        'semester': 3,
        'classForm': ClassForm.LAB,
        'maxStudentNumber': 80,
        'rate': 3.1,
        'imagePath' : 'https://png.pngtree.com/svg/20161206/course_1312462.png',
        'description': 'This is an example description of a course'
    },
    {
        'id': 7,
        'courseName': 'Statistics',
        'numberOfEtcs': 4,
        'semester': 3,
        'classForm': ClassForm.EXERCISE,
        'maxStudentNumber': 80,
        'rate': 2.7,
        'imagePath' : 'https://png.pngtree.com/svg/20161206/course_1312462.png',
        'description': 'This is an example description of a course'
    },
    {
        'id': 8,
        'courseName': 'Physics',
        'numberOfEtcs': 6,
        'semester': 3,
        'classForm': ClassForm.EXERCISE,
        'maxStudentNumber': 80,
        'rate': 4.1,
        'imagePath' : 'https://png.pngtree.com/svg/20161206/course_1312462.png',
        'description': 'This is an example description of a course'
    },
    {
        'id': 9,
        'courseName': 'Introduction to Databases',
        'numberOfEtcs': 4,
        'semester': 3,
        'classForm': ClassForm.LAB,
        'maxStudentNumber': 50,
        'rate': 4.4,
        'imagePath' : 'https://png.pngtree.com/svg/20161206/course_1312462.png',
        'description': 'This is an example description of a course'
    },
    {
        'id': 10,
        'courseName': 'Soft Skills',
        'numberOfEtcs': 3,
        'semester': 1,
        'classForm': ClassForm.EXERCISE,
        'maxStudentNumber': 100,
        'rate': 5.0,
        'imagePath' : 'https://png.pngtree.com/svg/20161206/course_1312462.png',
        'description': 'This is an example description of a course'
    }
    ];
    }