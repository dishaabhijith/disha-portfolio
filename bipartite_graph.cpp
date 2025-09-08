#include<iostream>
#include<vector>
#include<queue>

using namespace std;

int V, E;
int E1[1000000], E2[1000000];
int Answer[1000], AnswerN;

bool isBipartite(vector<vector<int>>& adj, vector<int>& color) {
    queue<int> q;
    
    // Check each component
    for (int start = 1; start <= V; start++) {
        if (color[start] == -1) {
            // Start BFS from this unvisited vertex
            color[start] = 0;
            q.push(start);
            
            while (!q.empty()) {
                int u = q.front();
                q.pop();
                
                for (int v : adj[u]) {
                    if (color[v] == -1) {
                        // Unvisited vertex, assign opposite color
                        color[v] = 1 - color[u];
                        q.push(v);
                    } else if (color[v] == color[u]) {
                        // Same color as current vertex - not bipartite
                        return false;
                    }
                }
            }
        }
    }
    return true;
}

int main(int argc, char** argv)
{
    int test_case;
    /* 
    The freopen function below opens input.txt in read only mode and 
    sets your standard input to work with the opened file. 
    When you test your code with the sample data, you can use the function
    below to read in from the sample data file instead of the standard input.
    So. you can uncomment the following line for your local test. But you
    have to comment the following line when you submit for your scores.
    */

    //freopen("sample_input.txt", "r", stdin);

    for(test_case = 1; test_case <= 10; ++test_case)
    {
        int i;

        /*
            Read each test case from standard input.
        */
        cin >> V >> E;
        for(i = 0; i < E; i++)
        {
            cin >> E1[i] >> E2[i];
        }

        /////////////////////////////////////////////////////////////////////////////////////////////
        /*
            Please, implement your algorithm from this section.
        */
        /////////////////////////////////////////////////////////////////////////////////////////////
        
        // Build adjacency list
        vector<vector<int>> adj(V + 1);
        for (i = 0; i < E; i++) {
            adj[E1[i]].push_back(E2[i]);
            adj[E2[i]].push_back(E1[i]);
        }
        
        // Color array: -1 = unvisited, 0 = color 0, 1 = color 1
        vector<int> color(V + 1, -1);
        
        if (isBipartite(adj, color)) {
            // Graph is bipartite, collect vertices with color 0
            AnswerN = 0;
            for (i = 1; i <= V; i++) {
                if (color[i] == 0) {
                    Answer[AnswerN++] = i;
                }
            }
        } else {
            // Graph is not bipartite
            AnswerN = -1;
        }

        // Print the answer to standard output(screen). 
        cout << "#" << test_case << " " << AnswerN;
        for(i = 0; i < AnswerN; i++)
        {
            cout << " " << Answer[i];
        }
        cout << endl;
    }

    return 0;//Your program should return 0 on normal termination.
}
