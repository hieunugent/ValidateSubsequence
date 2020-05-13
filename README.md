# ValidateSubsequence
- given two non empty array , write a function determind weather the second array is a subsequence of the first one
- the subarray is not necessary adjacent in the array, they must be in the same order that in the array
# Solution
- iterate each element in the sequence at each time check with the array, util it meet the equal element. 
- since it has to be same order in the array, so if there is no match return false, 
- if there is a match continue with the next element in sequence and the starting index considering for array is the index that previous element match. 
