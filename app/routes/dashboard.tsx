import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
import { Activity, Award, Book, Brain, Lightbulb, LineChart, PanelRight, User } from "lucide-react";
import { getUserTestSessions } from "~/models/test-session.server";
import { getAllTests } from "~/models/test.server";
import { requireUser } from "~/utils/session.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireUser(request);
  const sessions = await getUserTestSessions(user.id);
  const tests = await getAllTests();
  
  // Calculate overall stats
  const completedTests = sessions.filter(s => s.isComplete).length;
  const averageAbility = sessions.length > 0
    ? sessions.reduce((sum, s) => sum + s.currentAbility, 0) / sessions.length
    : 0;
  
  // Get recent sessions
  const recentSessions = sessions
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5);
  
  // Get recommended tests (tests not yet taken)
  const takenTestIds = new Set(sessions.map(s => s.testId));
  const recommendedTests = tests
    .filter(test => !takenTestIds.has(test.id))
    .slice(0, 3);
  
  return json({
    user,
    stats: {
      completedTests,
      averageAbility,
      totalQuestions: sessions.reduce((sum, s) => sum + s.answeredQuestions.length, 0),
    },
    recentSessions,
    recommendedTests,
  });
}

export default function Dashboard() {
  const { user, stats, recentSessions, recommendedTests } = useLoaderData<typeof loader>();
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar and Main Content Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex md:w-64 lg:w-72 flex-col fixed inset-y-0 bg-white shadow-md">
          <div className="flex items-center justify-center h-16 border-b border-gray-200 px-4">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary-500" />
              <span className="text-xl font-semibold">Adaptive IRT</span>
            </Link>
          </div>
          
          <nav className="flex-1 pt-4 pb-4 overflow-y-auto">
            <div className="px-4 mb-4">
              <div className="flex items-center space-x-3 px-3 py-3 rounded-lg bg-gray-50">
                <div className="rounded-full bg-primary-100 p-2">
                  <User className="h-5 w-5 text-primary-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user.name || 'User'}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-1 px-2">
              <Link
                to="/dashboard"
                className="flex items-center px-3 py-2 text-sm font-medium text-primary-700 rounded-md bg-primary-50"
              >
                <Activity className="mr-3 h-5 w-5 text-primary-500" />
                Dashboard
              </Link>
              
              <Link
                to="/tests"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
              >
                <Book className="mr-3 h-5 w-5 text-gray-500" />
                Available Tests
              </Link>
              
              <Link
                to="/dashboard/history"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
              >
                <LineChart className="mr-3 h-5 w-5 text-gray-500" />
                Test History
              </Link>
              
              <Link
                to="/dashboard/profile"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
              >
                <User className="mr-3 h-5 w-5 text-gray-500" />
                Profile
              </Link>
            </div>
            
            <div className="pt-6 px-2">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Resources
              </h3>
              <div className="mt-2 space-y-1">
                <Link
                  to="/help"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
                >
                  <Lightbulb className="mr-3 h-5 w-5 text-gray-500" />
                  Help & Support
                </Link>
              </div>
            </div>
          </nav>
          
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={() => {
                // Logout functionality
              }}
              className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
            >
              <svg className="mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm7 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm2-1a1 1 0 011 1v4a1 1 0 11-2 0V7a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Sign Out
            </button>
          </div>
        </aside>
        
        {/* Mobile Header */}
        <div className="md:hidden bg-white shadow">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-primary-500" />
                <span className="text-xl font-semibold">Adaptive IRT</span>
              </Link>
            </div>
            
            <button
              type="button"
              className="p-2 rounded-md text-gray-500 hover:text-primary-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <PanelRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Main Content */}
        <main className="flex-1 md:ml-64 lg:ml-72">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <motion.h1 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-gray-900"
              >
                Welcome back, {user.name || 'User'}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-1 text-gray-500"
              >
                Here's an overview of your testing progress and recommendations.
              </motion.p>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Stats */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="card p-5"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-md bg-primary-100 p-3">
                      <Book className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-500">Tests Completed</p>
                      <p className="mt-1 text-3xl font-semibold text-gray-900">{stats.completedTests}</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="card p-5"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-md bg-accent-100 p-3">
                      <Award className="h-6 w-6 text-accent-500" />
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-500">Average Ability</p>
                      <p className="mt-1 text-3xl font-semibold text-gray-900">{stats.averageAbility.toFixed(2)}</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="card p-5"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-md bg-secondary-100 p-3">
                      <Activity className="h-6 w-6 text-secondary-500" />
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-500">Questions Answered</p>
                      <p className="mt-1 text-3xl font-semibold text-gray-900">{stats.totalQuestions}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Recent and Recommended */}
              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                  <div className="card overflow-hidden">
                    {recentSessions.length > 0 ? (
                      <ul className="divide-y divide-gray-200">
                        {recentSessions.map((session) => (
                          <li key={session.id}>
                            <Link 
                              to={`/tests/${session.testId}/results?sessionId=${session.id}`}
                              className="block hover:bg-gray-50"
                            >
                              <div className="px-6 py-4">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium text-primary-600 truncate">
                                    {session.testTitle}
                                  </p>
                                  <div className="ml-2 flex-shrink-0 flex">
                                    <p className={`px-2 py-1 text-xs rounded-full
                                      ${session.isComplete 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-yellow-100 text-yellow-800'
                                      }`}
                                    >
                                      {session.isComplete ? 'Complete' : 'In Progress'}
                                    </p>
                                  </div>
                                </div>
                                <div className="mt-2 flex justify-between">
                                  <div className="sm:flex">
                                    <p className="flex items-center text-sm text-gray-500">
                                      <Award className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                      Ability: {session.currentAbility.toFixed(2)}
                                    </p>
                                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                      <Activity className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                      Questions: {session.answeredQuestions.length}
                                    </p>
                                  </div>
                                  <p className="text-sm text-gray-500">
                                    {formatDate(session.updatedAt)}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="p-6 text-center">
                        <p className="text-gray-500">You haven't taken any tests yet.</p>
                        <Link to="/tests" className="btn btn-primary mt-4">
                          Start Your First Test
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended Tests</h2>
                  {recommendedTests.length > 0 ? (
                    <div className="space-y-4">
                      {recommendedTests.map((test) => (
                        <div key={test.id} className="card p-5 hover:shadow-md transition-shadow">
                          <h3 className="text-lg font-medium mb-1">{test.title}</h3>
                          <p className="text-sm text-gray-500 mb-3">{test.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {test.tags.map((tag, i) => (
                              <span 
                                key={i} 
                                className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>Est. {test.estimatedTime} mins</span>
                            </div>
                            <Link to={`/tests/${test.id}`} className="btn btn-primary">
                              Start Test
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="card p-6 text-center">
                      <p className="text-gray-500">You've completed all available tests!</p>
                      <Link to="/tests" className="btn btn-primary mt-4">
                        View All Tests
                      </Link>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}