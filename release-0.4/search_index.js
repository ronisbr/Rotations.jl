var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#ReferenceFrameRotations.jl-1",
    "page": "Home",
    "title": "ReferenceFrameRotations.jl",
    "category": "section",
    "text": "CurrentModule = ReferenceFrameRotations\nDocTestSetup = quote\n    using ReferenceFrameRotations\nendThis module contains functions related to 3D rotations of reference frames. It is used on a daily basis on projects at the Brazilian National Institute for Space Research (INPE)."
},

{
    "location": "#Requirements-1",
    "page": "Home",
    "title": "Requirements",
    "category": "section",
    "text": "Julia >= 0.7\nStaticArrays >= 0.8.3"
},

{
    "location": "#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "This package can be installed using:julia> Pkg.update()\njulia> Pkg.add(\"ReferenceFrameRotations\")"
},

{
    "location": "#Status-1",
    "page": "Home",
    "title": "Status",
    "category": "section",
    "text": "This packages supports the following representations of 3D rotations:Euler Angle and Axis (INCOMPLETE);\nEuler Angles;\nDirection Cosine Matrices (DCMs);\nQuaternions.However, composing rotations is only currently supported for DCMs and Quaternions.Furthermore, the following conversions between the representations are available:Direction Cosine Matrices to Euler Angles;\nDirection Cosine Matrices to Quaternions;\nEuler Angle and Axis to Quaternions;\nEuler Angles to Direction Cosine Matrices;\nEuler Angles to Quaternions;\nSmall Euler Angles to Direction Cosine Matrices;\nSmall Euler Angles to Quaternions;\nQuaternions to Direction Cosine Matrices;\nQuaternions to Euler Angle and Axis;\nQuaternions to Euler Angles."
},

{
    "location": "#Roadmap-1",
    "page": "Home",
    "title": "Roadmap",
    "category": "section",
    "text": "This package will be continuously enhanced. Next steps will be to add other representations of 3D rotations such as Euler angle and axis (initial support is already available), Rodrigues parameters, etc."
},

{
    "location": "#Manual-outline-1",
    "page": "Home",
    "title": "Manual outline",
    "category": "section",
    "text": "Pages = [\n    \"man/dcm.md\",\n    \"man/euler_angle_axis.md\",\n    \"man/euler_angles.md\",\n    \"man/quaternions.md\",\n    \"man/conversions.md\",\n    \"man/kinematics.md\",\n    \"man/composing_rotations.md\",\n    \"man/inv_rotations.md\",\n]\nDepth = 2"
},

{
    "location": "#Library-documentation-1",
    "page": "Home",
    "title": "Library documentation",
    "category": "section",
    "text": "Pages = [\"lib/library.md\"]"
},

{
    "location": "man/dcm/#",
    "page": "Direction Cosine Matrices",
    "title": "Direction Cosine Matrices",
    "category": "page",
    "text": ""
},

{
    "location": "man/dcm/#Direction-Cosine-Matrices-1",
    "page": "Direction Cosine Matrices",
    "title": "Direction Cosine Matrices",
    "category": "section",
    "text": "CurrentModule = ReferenceFrameRotations\nDocTestSetup = quote\n    using ReferenceFrameRotations\nendDirection cosine matrices, or DCMs, are 3 times 3 matrices that represent a coordinate transformation between two orthonormal reference frames. Let those frames be right-handed, then it can be shown that this transformation is always a rotation. Thus, a DCM that rotates the reference frame a into alignment with the reference frame b is:mathbfD_ba = leftbeginmatrix\n    a_11  a_12  a_13 \n    a_21  a_22  a_23 \n    a_31  a_32  a_33\n    endmatrixrightIn ReferenceFrameRotations.jl, a DCM is a 3 times 3 static matrix:DCM{T} = SMatrix{3,3,T,9}which means that DCM is immutable."
},

{
    "location": "man/dcm/#Initialization-1",
    "page": "Direction Cosine Matrices",
    "title": "Initialization",
    "category": "section",
    "text": "Usually, a DCM is initialized by converting a more \"visual\" rotation representation, such as the Euler angles (see Conversions). However, it can be initialized by the following methods:Identity DCM.julia> DCM(I)  # Create a Boolean DCM, this can be used to save space.\n3×3 StaticArrays.SArray{Tuple{3,3},Bool,2,9}:\n  true  false  false\n false   true  false\n false  false   true\n\njulia> DCM(1I)  # Create an Integer DCM.\n3×3 StaticArrays.SArray{Tuple{3,3},Int64,2,9}:\n 1  0  0\n 0  1  0\n 0  0  1\n\njulia> DCM(1.f0I) # Create a Float32 DCM.\n3×3 StaticArrays.SArray{Tuple{3,3},Float32,2,9}:\n 1.0  0.0  0.0\n 0.0  1.0  0.0\n 0.0  0.0  1.0\n\njulia> DCM(1.0I)  # Create a Float64 DCM.\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n 1.0  0.0  0.0\n 0.0  1.0  0.0\n 0.0  0.0  1.0User-defined DCM.julia> DCM([-1 0 0; 0 -1 0; 0 0 1])\n3×3 StaticArrays.SArray{Tuple{3,3},Int64,2,9}:\n -1   0  0\n  0  -1  0\n  0   0  1\n\njulia> DCM([-1.f0 0.f0 0.f0; 0.f0 -1.f0 0.f0; 0.f0 0.f0 1.f0])\n3×3 StaticArrays.SArray{Tuple{3,3},Float32,2,9}:\n -1.0   0.0  0.0\n  0.0  -1.0  0.0\n  0.0   0.0  1.0\n\njulia> DCM([-1.0 0.0 0.0; 0.0 -1.0 0.0; 0.0 0.0 1.0])\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -1.0   0.0  0.0\n  0.0  -1.0  0.0\n  0.0   0.0  1.0note: Note\nThe type of the DCM will depend on the type of the input.warning: Warning\nThis initialization method will not verify if the input data is indeed a DCM."
},

{
    "location": "man/dcm/#Operations-1",
    "page": "Direction Cosine Matrices",
    "title": "Operations",
    "category": "section",
    "text": "Since a DCM is an Static Matrix (SMatrix), then all the operations available for general matrices in Julia are also available for DCMs."
},

{
    "location": "man/euler_angle_axis/#",
    "page": "Euler Angle and Axis",
    "title": "Euler Angle and Axis",
    "category": "page",
    "text": ""
},

{
    "location": "man/euler_angle_axis/#Euler-Angle-and-Axis-1",
    "page": "Euler Angle and Axis",
    "title": "Euler Angle and Axis",
    "category": "section",
    "text": "CurrentModule = ReferenceFrameRotations\nDocTestSetup = quote\n    using ReferenceFrameRotations\nendThe Euler angle and axis representation is defined by the following immutable structure:struct EulerAngleAxis{T}\n    a::T\n    v::SVector{3,T}\nendin which a is the Euler Angle and v is a unitary vector aligned with the Euler axis.The constructor for this structure is:function EulerAngleAxis(a::T1, v::AbstractVector{T2}) where {T1,T2}in which a EulerAngleAxis with angle a [rad] and vector v will be created. Notice that the type of the returned structure will be selected according to the input types T1 and T2. Furthermore, the vector v will not be normalized.julia> EulerAngleAxis(1,[1,1,1])\nEulerAngleAxis{Int64}(1, [1, 1, 1])\n\njulia> EulerAngleAxis(1.f0,[1,1,1])\nEulerAngleAxis{Float32}(1.0f0, Float32[1.0, 1.0, 1.0])\n\njulia> EulerAngleAxis(1,[1,1,1.f0])\nEulerAngleAxis{Float32}(1.0f0, Float32[1.0, 1.0, 1.0])\n\njulia> EulerAngleAxis(1.0,[1,1,1])\nEulerAngleAxis{Float64}(1.0, [1.0, 1.0, 1.0])note: Note\nThe support of this representation is still incomplete. Only the conversion to and from quaternions are implemented. Furthermore, there is no support for operations using Euler angles and axes."
},

{
    "location": "man/euler_angles/#",
    "page": "Euler Angles",
    "title": "Euler Angles",
    "category": "page",
    "text": ""
},

{
    "location": "man/euler_angles/#Euler-Angles-1",
    "page": "Euler Angles",
    "title": "Euler Angles",
    "category": "section",
    "text": "CurrentModule = ReferenceFrameRotations\nDocTestSetup = quote\n    using ReferenceFrameRotations\nendThe Euler Angles are defined by the following immutable structure:struct EulerAngles{T}\n    a1::T\n    a2::T\n    a3::T\n    rot_seq::Symbol\nendin which a1, a2, and a3 define the angles and the rot_seq is a symbol that defines the axes. The valid values for rot_seq are::XYX, :XYZ, :XZX, :XZY, :YXY, :YXZ, :YZX, :YZY, :ZXY, :ZXZ, :ZYX, and ZYZ.note: Note\nIn the current version, there is no support for operations using Euler Angles."
},

{
    "location": "man/quaternions/#",
    "page": "Quaternions",
    "title": "Quaternions",
    "category": "page",
    "text": ""
},

{
    "location": "man/quaternions/#Quaternion-1",
    "page": "Quaternions",
    "title": "Quaternion",
    "category": "section",
    "text": "CurrentModule = ReferenceFrameRotations\nDocTestSetup = quote\n    using ReferenceFrameRotations\nendQuaternions are hypercomplex number with 4 dimensions that can be used to represent 3D rotations. In this package, a quaternion mathbfq is represented bymathbfq = overbraceq_0^mboxReal part + underbraceq_1 cdot mathbfi + q_2 cdot mathbfj + q_3 cdot mathbfk_mboxVectorial or imaginary part = r + mathbfvusing the following immutable structure:struct Quaternion{T}\n    q0::T\n    q1::T\n    q2::T\n    q3::T\nend"
},

{
    "location": "man/quaternions/#Initialization-1",
    "page": "Quaternions",
    "title": "Initialization",
    "category": "section",
    "text": "There are several ways to create a quaternion.Provide all the elements:julia> q = Quaternion(1.0, 0.0, 0.0, 0.0)\nQuaternion{Float64}:\n  + 1.0 + 0.0.i + 0.0.j + 0.0.kProvide the real and imaginary parts as separated numbers:julia> r = sqrt(2)/2;\n\njulia> v = [sqrt(2)/2; 0; 0];\n\njulia> q = Quaternion(r,v)\nQuaternion{Float64}:\n  + 0.7071067811865476 + 0.7071067811865476.i + 0.0.j + 0.0.kProvide the real and imaginary parts as one single vector:julia> v = [1.;2.;3.;4.];\n\njulia> q = Quaternion(v)\nQuaternion{Float64}:\n  + 1.0 + 2.0.i + 3.0.j + 4.0.kProvide just the imaginary part, in this case the real part will be 0:julia> v = [1.;0.;0.];\n\njulia> q = Quaternion(v)\nQuaternion{Float64}:\n  + 0.0 + 1.0.i + 0.0.j + 0.0.kCreate an identity quaternion:julia> q = Quaternion{Float64}(I)  # Creates an identity quaternion of type `Float64`.\nQuaternion{Float64}:\n  + 1.0 + 0.0.i + 0.0.j + 0.0.k\n\njulia> q = Quaternion(1.0I)  # Creates an identity quaternion of type `Float64`.\nQuaternion{Float64}:\n  + 1.0 + 0.0.i + 0.0.j + 0.0.k\n\njulia> q = Quaternion{Float32}(I)  # Creates an identity quaternion of type `Float32`.\nQuaternion{Float32}:\n  + 1.0 + 0.0.i + 0.0.j + 0.0.k\n\njulia> q = Quaternion(1.0f0I)  # Creates an identity quaternion of type `Float32`.\nQuaternion{Float32}:\n  + 1.0 + 0.0.i + 0.0.j + 0.0.k\n\njulia> a = Quaternion(I,q)  # Creates an identity quaternion with the same type of `q`.\nQuaternion{Float32}:\n  + 1.0 + 0.0.i + 0.0.j + 0.0.k\n\njulia> q = Quaternion(I)\nQuaternion{Bool}:\n  + true + false.i + false.j + false.kCreate a zero quaternion using the zeros function:julia> q = zeros(Quaternion)  # Creates a zero quaternion of type `Float64`.\nQuaternion{Float64}:\n  + 0.0 + 0.0.i + 0.0.j + 0.0.k\n\njulia> q = zeros(Quaternion{Float32})  # Creates a zero quaternion of type `Float32`.\nQuaternion{Float32}:\n  + 0.0 + 0.0.i + 0.0.j + 0.0.k\n\njulia> a = zeros(q)  # Creates a zero quaternion with the same type of `q`.\nQuaternion{Float32}:\n  + 0.0 + 0.0.i + 0.0.j + 0.0.knote: Note\nIndividual elements of the quaternion can be accessed by:q.q0\nq.q1\nq.q2\nq.q3warning: Warning\nSince the type Quaternion is immutable, its components cannot be changed individually after the creation. Hence, the following operation will lead to an error:q.q0 = 1.0  # This is not defined and will not work.If you want to modify a single value for the quaternion, then you need to create another one:q = Quaternion(1.0, q.q1, q.q2, q.q3)This can be annoying sometimes, but using an immutable type provided a huge performance boost for the algorithm."
},

{
    "location": "man/quaternions/#Operations-1",
    "page": "Quaternions",
    "title": "Operations",
    "category": "section",
    "text": ""
},

{
    "location": "man/quaternions/#Sum,-subtraction,-and-scalar-multiplication-1",
    "page": "Quaternions",
    "title": "Sum, subtraction, and scalar multiplication",
    "category": "section",
    "text": "The sum between quaternions, the subtraction between quaternions, and the multiplication between a quaternion and a scalar are defined as usual:beginaligned\n  mathbfq_a + mathbfq_b = (q_a0 + q_b0) +\n                                 (q_a1 + q_b1) cdot mathbfi +\n                                 (q_a2 + q_b2) cdot mathbfj +\n                                 (q_a3 + q_b3) cdot mathbfk \n  mathbfq_a - mathbfq_b = (q_a0 - q_b0) +\n                                 (q_a1 - q_b1) cdot mathbfi +\n                                 (q_a2 - q_b2) cdot mathbfj +\n                                 (q_a3 - q_b3) cdot mathbfk \n  lambda cdot mathbfq = (lambda cdot q_0) +\n                              (lambda cdot q_1) cdot mathbfi +\n                              (lambda cdot q_2) cdot mathbfj +\n                              (lambda cdot q_3) cdot mathbfk\nendalignedjulia> q1 = Quaternion(1.0,1.0,0.0,0.0);\n\njulia> q2 = Quaternion(1.0,2.0,3.0,4.0);\n\njulia> q1+q2\nQuaternion{Float64}:\n  + 2.0 + 3.0.i + 3.0.j + 4.0.k\n\njulia> q1-q2\nQuaternion{Float64}:\n  + 0.0 - 1.0.i - 3.0.j - 4.0.k\n\njulia> q1 = Quaternion(1.0,2.0,3.0,4.0);\n\njulia> q1*3\nQuaternion{Float64}:\n  + 3.0 + 6.0.i + 9.0.j + 12.0.k\n\njulia> 4*q1\nQuaternion{Float64}:\n  + 4.0 + 8.0.i + 12.0.j + 16.0.k\n\njulia> 5q1\nQuaternion{Float64}:\n  + 5.0 + 10.0.i + 15.0.j + 20.0.k"
},

{
    "location": "man/quaternions/#Multiplication-between-quaternions-1",
    "page": "Quaternions",
    "title": "Multiplication between quaternions",
    "category": "section",
    "text": "The multiplication between quaternions is defined using the Hamilton product:beginaligned\n  mathbfq_1 = r_1 + mathbfv_1 \n  mathbfq_2 = r_2 + mathbfv_2 \n  mathbfq_1 cdot mathbfq_2 = r_1 cdot r_2 -\n                                     mathbfv_1 cdot mathbfv_2 +\n                                     r_1 cdot mathbfv_2 +\n                                     r_2 cdot mathbfv_1 +\n                                     mathbfv_1 times mathbfv_2\nendalignedjulia> q1 = Quaternion(cosd(15), sind(15), 0.0, 0.0);\n\njulia> q2 = Quaternion(cosd(30), sind(30), 0.0, 0.0);\n\njulia> q1*q2\nQuaternion{Float64}:\n  + 0.7071067811865475 + 0.7071067811865475.i + 0.0.j + 0.0.kIf a quaternion mathbfq is multiplied by a vector mathbfv, then the vector is converted to a quaternion with real part 0, mathbfq_v = 0 + mathbfv, and the quaternion multiplication is performed as usual:beginaligned\nmathbfq   = r + mathbfw \nmathbfq_v = 0 + mathbfv \nmathbfq cdot mathbfv triangleq mathbfq cdot mathbfq_v = - mathbfw cdot mathbfv + r cdot mathbfv + mathbfw times mathbfv \nmathbfv cdot mathbfq triangleq mathbfq_v cdot mathbfq = - mathbfv cdot mathbfw + r cdot mathbfv + mathbfv times mathbfw\nendalignedjulia> q1 = Quaternion(cosd(22.5), sind(22.5), 0.0, 0.0);\n\njulia> v  = [0;1;0];\n\njulia> v*q1\nQuaternion{Float64}:\n  + 0.0 + 0.0.i + 0.9238795325112867.j - 0.3826834323650898.k\n\njulia> q1*v\nQuaternion{Float64}:\n  + 0.0 + 0.0.i + 0.9238795325112867.j + 0.3826834323650898.k"
},

{
    "location": "man/quaternions/#Division-between-quaternions-1",
    "page": "Quaternions",
    "title": "Division between quaternions",
    "category": "section",
    "text": "Given this definition of the product between two quaternions, we can define the multiplicative inverse of a quaternion by:mathbfq^-1 triangleq fracbarmathbfqmathbfq^2 =\n  fracq_0 - q_1 cdot mathbfi - q_2 cdot mathbfj - q_3 cdot mathbfk\n       q_0^2 + q_1^2 + q_2^2 + q_3^2Notice that, in this case, one gets:mathbfq cdot mathbfq^-1 = 1note: Note\nbarmathbfq, which is the quaternion conjugate, can be computed using conj(q).mathbfq, which is the quaternion norm, can be computed using norm(q).The quaternion inverse can be computed using inv(q).warning: Warning\nThe exponentiation operator is not defined for quaternions. Hence, q^(-1) or q^2 will throw an error.The right division (/) between two quaternions mathbfq_1 and mathbfq_2 is defined as the following Hamilton product:mathbfq_1mathbfq_2 = mathbfq_1 cdot mathbfq_2^-1The left division (\\) between two quaternions mathbfq_1 and mathbfq_2 is defined as the following Hamilton product:mathbfq_1backslashmathbfq_2 = mathbfq_1^-1 cdot mathbfq_2julia> q1 = Quaternion(cosd(45+22.5), sind(45+22.5), 0.0, 0.0);\n\njulia> q2 = Quaternion(cosd(22.5), sind(22.5), 0.0, 0.0);\n\njulia> q1/q2\nQuaternion{Float64}:\n  + 0.7071067811865476 + 0.7071067811865475.i + 0.0.j + 0.0.k\n\njulia> q1\\q2\nQuaternion{Float64}:\n  + 0.7071067811865476 - 0.7071067811865475.i + 0.0.j + 0.0.k\n\njulia> q1\\q2*q1/q2\nQuaternion{Float64}:\n  + 1.0 + 5.551115123125783e-17.i + 0.0.j + 0.0.kIf a division operation (right-division or left-division) is performed between a vector mathbfv and a quaternion, then the vector mathbfv is converted to a quaternion real part 0, mathbfq_v = 0 + mathbfv, and the division operation is performed as defined earlier.beginaligned\n  mathbfvmathbfq          triangleq mathbfq_v      cdot mathbfq^-1   \n  mathbfvbackslashmathbfq triangleq mathbfq_v^-1 cdot mathbfq        \n  mathbfqmathbfv          triangleq mathbfq        cdot mathbfq_v^-1 \n  mathbfqbackslashmathbfv triangleq mathbfq^-1   cdot mathbfq_v\nendalignedjulia> q1 = Quaternion(cosd(22.5), sind(22.5), 0.0, 0.0);\n\njulia> v  = [0;1;0];\n\njulia> q1\\v\nQuaternion{Float64}:\n  + 0.0 + 0.0.i + 0.9238795325112867.j - 0.3826834323650898.k\n\njulia> v\\q1\nQuaternion{Float64}:\n  + 0.0 + 0.0.i - 0.9238795325112867.j + 0.3826834323650898.k\n"
},

{
    "location": "man/quaternions/#Other-operations-1",
    "page": "Quaternions",
    "title": "Other operations",
    "category": "section",
    "text": "There are also the following functions available:julia> q = Quaternion(1.0,2.0,3.0,4.0);\n\njulia> conj(q)  # Returns the complex conjugate of the quaternion.\nQuaternion{Float64}:\n  + 1.0 - 2.0.i - 3.0.j - 4.0.k\n\njulia> copy(q)  # Creates a copy of the quaternion.\nQuaternion{Float64}:\n  + 1.0 + 2.0.i + 3.0.j + 4.0.k\n\njulia> inv(q)   # Computes the multiplicative inverse of the quaternion.\nQuaternion{Float64}:\n  + 0.03333333333333333 - 0.06666666666666667.i - 0.1.j - 0.13333333333333333.k\n\njulia> inv(q)*q\nQuaternion{Float64}:\n  + 1.0 + 0.0.i + 5.551115123125783e-17.j + 0.0.k\n\njulia> imag(q)  # Returns the vectorial / imaginary part of the quaternion.\n3-element StaticArrays.SArray{Tuple{3},Float64,1,3}:\n 2.0\n 3.0\n 4.0\n\njulia> norm(q)  # Computes the norm of the quaternion.\n5.477225575051661\n\njulia> real(q)  # Returns the real part of the quaternion.\n1.0\n\njulia> vect(q)  # Returns the vectorial / imaginary part of the quaternion.\n3-element StaticArrays.SArray{Tuple{3},Float64,1,3}:\n 2.0\n 3.0\n 4.0note: Note\nThe operation a/q is equal to a*inv(q) if a is a scalar."
},

{
    "location": "man/quaternions/#Converting-reference-frames-using-quaternions-1",
    "page": "Quaternions",
    "title": "Converting reference frames using quaternions",
    "category": "section",
    "text": "Given the reference frames A and B, let mathbfw be a unitary vector in which a rotation about it of an angle theta aligns the reference frame A with the reference frame B (in this case, mathbfw is aligned with the Euler Axis and theta is the Euler angle). Construct the following quaternion:mathbfq_ba = cosleft(fractheta2right) + sinleft(fractheta2right) cdot mathbfwThen, a vector mathbfv represented in reference frame A (mathbfv_a) can be represented in reference frame B using:mathbfv_b = textttvectleft(mathbfq_ba^-1 cdot mathbfv_a cdot mathbfq_baright)Hence:julia> qBA = Quaternion(cosd(22.5), sind(22.5), 0.0, 0.0);\n\njulia> vA  = [0;1;0];\n\njulia> vB  = vect(qBA\\vA*qBA); # Equivalent to: vect(inv(qBA)*vA*qBA);\n\njulia> vB\n3-element StaticArrays.SArray{Tuple{3},Float64,1,3}:\n  0.0\n  0.707107\n -0.707107note: Note\nA SArray is returned instead of the usual Array. This is a static vector created by the package StaticArrays. Generally, you can treat this vector as any other one. The only downside is that you cannot modify individual components because it is immutable."
},

{
    "location": "man/conversions/#",
    "page": "Conversions",
    "title": "Conversions",
    "category": "page",
    "text": ""
},

{
    "location": "man/conversions/#Conversions-1",
    "page": "Conversions",
    "title": "Conversions",
    "category": "section",
    "text": "CurrentModule = ReferenceFrameRotations\nDocTestSetup = quote\n    using LinearAlgebra\n    using ReferenceFrameRotations\nendThere are several functions available to convert between the different types of 3D rotation representations."
},

{
    "location": "man/conversions/#DCMs-to-Euler-Angles-1",
    "page": "Conversions",
    "title": "DCMs to Euler Angles",
    "category": "section",
    "text": "A Direction Cosine Matrix (DCM) can be converted to Euler Angles using the following function:function dcm2angle(dcm, rot_seq=:ZYX)julia> dcm = DCM([1 0 0; 0 0 -1; 0 1 0]);\n\njulia> dcm2angle(dcm)\nEulerAngles{Float64}(0.0, 0.0, -1.5707963267948966, :ZYX)\n\njulia> dcm2angle(dcm, :XYZ)\nEulerAngles{Float64}(-1.5707963267948966, 0.0, 0.0, :XYZ)"
},

{
    "location": "man/conversions/#DCMs-to-Quaternions-1",
    "page": "Conversions",
    "title": "DCMs to Quaternions",
    "category": "section",
    "text": "A DCM can be converted to quaternion using the following method:function dcm2quat(dcm)julia> dcm = DCM([1.0 0.0 0.0; 0.0 0.0 -1.0; 0.0 1.0 0.0]);\n\njulia> q   = dcm2quat(dcm)\nQuaternion{Float64}:\n  + 0.7071067811865476 - 0.7071067811865475.i + 0.0.j + 0.0.kwarning: Warning\nAvoid using DCMs with Int numbers like:dcm = DCM([1 0 0; 0 0 -1; 0 1 0])because it can lead to InexactError() when converting to Quaternions. This bug will be addressed in a future version of ReferenceFrameRotations.jl."
},

{
    "location": "man/conversions/#Euler-Angle-and-Axis-to-Quaternions-1",
    "page": "Conversions",
    "title": "Euler Angle and Axis to Quaternions",
    "category": "section",
    "text": "A Euler angle and axis representation can be converted to quaternion using these two methods:function angleaxis2quat(a, v)\nfunction angleaxis2quat(angleaxis)julia> a = 60.0*pi/180;\n\njulia> v = [sqrt(3)/3;sqrt(3)/3;sqrt(3)/3];\n\njulia> angleaxis2quat(a,v)\nQuaternion{Float64}:\n  + 0.8660254037844387 + 0.2886751345948128.i + 0.2886751345948128.j + 0.2886751345948128.k\n\njulia> angleaxis = EulerAngleAxis(a,v);\n\njulia> angleaxis2quat(angleaxis)\nQuaternion{Float64}:\n  + 0.8660254037844387 + 0.2886751345948128.i + 0.2886751345948128.j + 0.2886751345948128.k"
},

{
    "location": "man/conversions/#Euler-Angles-to-Direction-Cosine-Matrices-1",
    "page": "Conversions",
    "title": "Euler Angles to Direction Cosine Matrices",
    "category": "section",
    "text": "Euler angles can be converted to DCMs using the following functions:function angle2dcm(angle_r1, angle_r2, angle_r3, rot_seq=:ZYX)\nfunction angle2dcm(eulerang)julia> dcm = angle2dcm(pi/2, pi/4, pi/3, :ZYX)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  4.32978e-17  0.707107  -0.707107\n -0.5          0.612372   0.612372\n  0.866025     0.353553   0.353553\n\njulia> angles = EulerAngles(pi/2, pi/4, pi/3, :ZYX);\n\njulia> dcm    = angle2dcm(angles)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  4.32978e-17  0.707107  -0.707107\n -0.5          0.612372   0.612372\n  0.866025     0.353553   0.353553"
},

{
    "location": "man/conversions/#Euler-Angles-to-Quaternions-1",
    "page": "Conversions",
    "title": "Euler Angles to Quaternions",
    "category": "section",
    "text": "Euler angles can be converted to quaternions using the following functions:function angle2quat(angle_r1, angle_r2, angle_r3, rot_seq=:ZYX)\nfunction angle2quat(eulerang)julia> q = angle2quat(pi/2, pi/4, pi/3, :ZYX)\nQuaternion{Float64}:\n  + 0.7010573846499779 + 0.09229595564125723.i + 0.5609855267969309.j + 0.43045933457687935.k\n\njulia> angles = EulerAngles(pi/2, pi/4, pi/3, :ZYX);\n\njulia> q    = angle2quat(angles)\nQuaternion{Float64}:\n  + 0.7010573846499779 + 0.09229595564125723.i + 0.5609855267969309.j + 0.43045933457687935.k"
},

{
    "location": "man/conversions/#Small-Euler-Angles-to-Direction-Cosine-Matrices-1",
    "page": "Conversions",
    "title": "Small Euler Angles to Direction Cosine Matrices",
    "category": "section",
    "text": "Small Euler angles can be converted to DCMs using the following function:function smallangle2dcm(θx, θy, θz)julia> dcm = smallangle2dcm(0.001, -0.002, +0.003)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  1.0     0.003  0.002\n -0.003   1.0    0.001\n -0.002  -0.001  1.0warning: Warning\nThe computed DCM is not ortho-normalized."
},

{
    "location": "man/conversions/#Small-Euler-Angles-to-Quaternions-1",
    "page": "Conversions",
    "title": "Small Euler Angles to Quaternions",
    "category": "section",
    "text": "Small Euler angles can be converted to quaternions using the following function:function smallangle2quat(θx, θy, θz)julia> q = smallangle2quat(0.001, -0.002, +0.003)\nQuaternion{Float64}:\n  + 0.9999982500045936 + 0.0004999991250022968.i - 0.0009999982500045936.j + 0.0014999973750068907.knote: Note\nThe computed quaternion is normalized."
},

{
    "location": "man/conversions/#Quaternions-to-Direction-Cosine-Matrices-1",
    "page": "Conversions",
    "title": "Quaternions to Direction Cosine Matrices",
    "category": "section",
    "text": "A quaternion can be converted to DCM using the following method:function quat2dcm(q)julia> q   = Quaternion(cosd(22.5), sind(22.5), 0.0, 0.0);\n\njulia> dcm = quat2dcm(q)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n 1.0   0.0       0.0\n 0.0   0.707107  0.707107\n 0.0  -0.707107  0.707107"
},

{
    "location": "man/conversions/#Quaternions-to-Euler-Angle-and-Axis-1",
    "page": "Conversions",
    "title": "Quaternions to Euler Angle and Axis",
    "category": "section",
    "text": "A quaternion can be converted to Euler Angle and Axis representation using the following function:function quat2angleaxis(q)julia> v = [sqrt(3)/3;sqrt(3)/3;sqrt(3)/3];\n\njulia> a = 60.0*pi/180;\n\njulia> q = Quaternion(cos(a/2), v*sin(a/2));\n\njulia> quat2angleaxis(q)\nEulerAngleAxis{Float64}(1.0471975511965974, [0.57735, 0.57735, 0.57735])"
},

{
    "location": "man/conversions/#Quaternions-to-Euler-Angles-1",
    "page": "Conversions",
    "title": "Quaternions to Euler Angles",
    "category": "section",
    "text": "There is one method to convert quaternions to Euler Angles:function quat2angle(q, rot_seq=:ZYX)However, it first transforms the quaternion to DCM using quat2dcm and then transforms the DCM into the Euler Angles. Hence, the performance will be poor. The improvement of this conversion will be addressed in a future version of ReferenceFrameRotations.jl.julia> q = Quaternion(cosd(22.5), sind(22.5), 0.0, 0.0);\n\njulia> quat2angle(q, :XYZ)\nEulerAngles{Float64}(0.7853981633974484, 0.0, -0.0, :XYZ)"
},

{
    "location": "man/kinematics/#",
    "page": "Kinematics",
    "title": "Kinematics",
    "category": "page",
    "text": ""
},

{
    "location": "man/kinematics/#Kinematics-1",
    "page": "Kinematics",
    "title": "Kinematics",
    "category": "section",
    "text": "CurrentModule = ReferenceFrameRotations\nDocTestSetup = quote\n    using ReferenceFrameRotations\nendCurrently, only the kinematics of Direction Cosine Matrices and Quaternions are implemented."
},

{
    "location": "man/kinematics/#Direction-Cosine-Matrices-1",
    "page": "Kinematics",
    "title": "Direction Cosine Matrices",
    "category": "section",
    "text": "Let A and B be two reference frames in which the angular velocity of B with respect to A, and represented in B, is given byboldsymbolomega_bab = leftbeginarrayc\n    omega_babx \n    omega_baby \n    omega_babz\nendarrayrightIf mathbfD_b^a is the DCM that rotates the reference frame A into alignment with the reference frame B, then its time-derivative isdotmathbfD_b^a = -leftbeginarrayccc\n           0          -omega_babz  +omega_baby \n    +omega_babz         0          -omega_babx \n    -omega_baby  +omega_babx         0\nendarrayright cdot mathbfD_b^aIn this package, the time-derivative of this DCM can be computed using the function:function ddcm(Dba, wba_b)julia> wba_b = [0.01;0;0];\n\njulia> Dba = angle2dcm(0.5,0,0,:XYZ)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  1.0   0.0       0.0\n -0.0   0.877583  0.479426\n  0.0  -0.479426  0.877583\n\njulia> ddcm(Dba,wba_b)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n -0.0   0.0          0.0\n  0.0  -0.00479426   0.00877583\n  0.0  -0.00877583  -0.00479426"
},

{
    "location": "man/kinematics/#Quaternions-1",
    "page": "Kinematics",
    "title": "Quaternions",
    "category": "section",
    "text": "Let A and B be two reference frames in which the angular velocity of B with respect to A, and represented in B, is given byboldsymbolomega_bab = leftbeginarrayc\n    omega_babx \n    omega_baby \n    omega_babz\nendarrayrightIf mathbfq_ba is the quaternion that rotates the reference frame A into alignment with the reference frame B, then its time-derivative isdotmathbfq_ba = frac12 cdot leftbeginarraycccc\n           0           -omega_babx   -omega_baby  -omega_babz \n    +omega_babx          0           +omega_babz  -omega_baby \n    +omega_baby   -omega_babz          0          +omega_babx \n    +omega_babz   +omega_baby   -omega_babx         0       \nendarrayright cdot mathbfq_baIn this package, the time-derivative of this quaternion can be computed using the function:function dquat(qba, wba_b)julia> wba_b = [0.01;0;0];\n\njulia> qba = angle2quat(0.5,0,0,:XYZ);\n\njulia> dquat(qba,wba_b)\nQuaternion{Float64}:\n  - 0.0012370197962726147 + 0.004844562108553224.i + 0.0.j + 0.0.k"
},

{
    "location": "man/composing_rotations/#",
    "page": "Composing rotations",
    "title": "Composing rotations",
    "category": "page",
    "text": ""
},

{
    "location": "man/composing_rotations/#Composing-rotations-1",
    "page": "Composing rotations",
    "title": "Composing rotations",
    "category": "section",
    "text": "CurrentModule = ReferenceFrameRotations\nDocTestSetup = quote\n    using ReferenceFrameRotations\nendMultiple rotations represented by direction cosine matrices or quaternions can be composed using the function:compose_rotation(R1,R2,R3,R4...)in which R1, R2, R3, ..., must be simultaneously DCMs or Quaternions. This method returns the following rotation:(Image: )julia> D1 = angle2dcm(0.5,0.5,0.5,:XYZ)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  0.770151   0.622447  -0.139381\n -0.420735   0.659956   0.622447\n  0.479426  -0.420735   0.770151\n\njulia> D2 = angle2dcm(-0.5,-0.5,-0.5,:ZYX)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  0.770151  -0.420735   0.479426\n  0.622447   0.659956  -0.420735\n -0.139381   0.622447   0.770151\n\njulia> compose_rotation(D1,D2)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n 1.0          2.77556e-17  0.0\n 2.77556e-17  1.0          5.55112e-17\n 0.0          5.55112e-17  1.0\n\njulia> q1 = angle2quat(0.5,0.5,0.5,:XYZ);\n\njulia> q2 = angle2quat(-0.5,-0.5,-0.5,:ZYX);\n\njulia> compose_rotation(q1,q2)\nQuaternion{Float64}:\n  + 0.9999999999999998 + 0.0.i + 0.0.j + 0.0.k"
},

{
    "location": "man/inv_rotations/#",
    "page": "Inverting rotations",
    "title": "Inverting rotations",
    "category": "page",
    "text": ""
},

{
    "location": "man/inv_rotations/#Inverting-rotations-1",
    "page": "Inverting rotations",
    "title": "Inverting rotations",
    "category": "section",
    "text": "CurrentModule = ReferenceFrameRotations\nDocTestSetup = quote\n    using ReferenceFrameRotations\nendA rotation represented by direction cosine matrix or quaternion can be inverted using the function:inv_rotation(R)in which R must be a DCM or a Quaternion.note: Note\nIf R is a DCM, then the transpose matrix will be returned. Hence, the user must ensure that the input matrix is ortho-normalized. Otherwise, the result will not be the inverse matrix of the input.If R is a Quaternion, then the conjugate quaternion will be returned. Hence, the user must ensure that the input quaternion is normalized (have unit norm). Otherwise, the result will not be the inverse quaternion of the input.These behaviors were selected to alleviate the computational burden.julia> D1 = angle2dcm(0.5,0.5,0.5,:XYZ);\n\njulia> D2 = inv_rotation(D1)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  0.770151  -0.420735   0.479426\n  0.622447   0.659956  -0.420735\n -0.139381   0.622447   0.770151\n\njulia> D2*D1\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n 1.0          2.77556e-17  0.0\n 2.77556e-17  1.0          5.55112e-17\n 0.0          5.55112e-17  1.0\n\njulia> q1 = angle2quat(0.5,0.5,0.5,:XYZ);\n\njulia> q2 = inv_rotation(q1)\nQuaternion{Float64}:\n  + 0.89446325406638 - 0.29156656802867026.i - 0.17295479161025828.j - 0.29156656802867026.k\n\njulia> q2*q1\nQuaternion{Float64}:\n  + 0.9999999999999998 + 0.0.i - 1.3877787807814457e-17.j + 0.0.k"
},

{
    "location": "lib/library/#",
    "page": "Library",
    "title": "Library",
    "category": "page",
    "text": ""
},

{
    "location": "lib/library/#ReferenceFrameRotations.DCM",
    "page": "Library",
    "title": "ReferenceFrameRotations.DCM",
    "category": "type",
    "text": "The Direction Cosine Matrix of type T is a SMatrix{3,3,T,9}, which is a 3x3 static matrix of type T.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.EulerAngleAxis",
    "page": "Library",
    "title": "ReferenceFrameRotations.EulerAngleAxis",
    "category": "type",
    "text": "struct EulerAngleAxis{T}\n\nThe definition of Euler Angle and Axis to represent a 3D rotation.\n\nFields\n\na: The Euler angle [rad].\nv: The unitary vector aligned with the Euler axis.\n\nConstructor\n\nfunction EulerAngleAxis(a::T1, v::AbstractVector{T2}) where {T1,T2}\n\nCreate an Euler Angle and Axis representation structure with angle a [rad] and vector v. Notice that the vector v will not be normalized. The type of the returned structure will be selected according to the input types.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.EulerAngles",
    "page": "Library",
    "title": "ReferenceFrameRotations.EulerAngles",
    "category": "type",
    "text": "struct EulerAngles{T}\n\nThe definition of Euler Angles, which is composed of three angles a1, a2, and a3 together with a rotation sequence rot_seq. The latter is provided by a symbol with three characters, each one indicating the rotation axis of the corresponding angle (for example, :ZYX). The valid values for rot_seq are:\n\n:XYX, :XYZ, :XZX, :XZY, :YXY, :YXZ, :YZX, :YZY, :ZXY, :ZXZ, :ZYX, and ZYZ.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.Quaternion",
    "page": "Library",
    "title": "ReferenceFrameRotations.Quaternion",
    "category": "type",
    "text": "struct Quaternion{T}\n\nThe definition of the quaternion. It has four values of type T. The quaternion representation is:\n\nq0 + q1.i + q2.j + q3.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.Quaternion-Tuple{AbstractArray{T,1} where T}",
    "page": "Library",
    "title": "ReferenceFrameRotations.Quaternion",
    "category": "method",
    "text": "function Quaternion(v::AbstractVector)\n\nIf the vector v has 3 components, then create a quaternion in which the real part is 0 and the vectorial or imaginary part has the same components of the vector v. In other words:\n\nq = 0 + v[1].i + v[2].j + v[3].k\n\nOtherwise, if the vector v has 4 components, then create a quaternion in which the elements match those of the input vector:\n\nq = v[1] + v[2].i + v[3].j + v[4].k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.Quaternion-Tuple{Number,AbstractArray{T,1} where T}",
    "page": "Library",
    "title": "ReferenceFrameRotations.Quaternion",
    "category": "method",
    "text": "function Quaternion(r::Number, v::AbstractVector)\n\nCreate a quaternion with real part r and vectorial or imaginary part v:\n\nr + v[1].i + v[2].j + v[3].k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.Quaternion-Union{Tuple{T3}, Tuple{T2}, Tuple{T1}, Tuple{T0}, Tuple{T0,T1,T2,T3}} where T3 where T2 where T1 where T0",
    "page": "Library",
    "title": "ReferenceFrameRotations.Quaternion",
    "category": "method",
    "text": "function Quaternion(q0::T0, q1::T1, q2::T2, q3::T3) where {T0,T1,T2,T3}\n\nCreate the following quaternion:\n\nq0 + q1.i + q2.j + q3.k\n\nin which:\n\nq0 is the real part of the quaternion.\nq1 is the X component of the quaternion vectorial part.\nq2 is the Y component of the quaternion vectorial part.\nq3 is the Z component of the quaternion vectorial part.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.Quaternion-Union{Tuple{T}, Tuple{UniformScaling,Quaternion{T}}} where T",
    "page": "Library",
    "title": "ReferenceFrameRotations.Quaternion",
    "category": "method",
    "text": "function Quaternion(::UniformScaling,::Quaternion{T}) where T\n\nCreate an identity quaternion of type T:\n\nT(1) + T(0).i + T(0).j + T(0).k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.Quaternion-Union{Tuple{UniformScaling{T}}, Tuple{T}} where T",
    "page": "Library",
    "title": "ReferenceFrameRotations.Quaternion",
    "category": "method",
    "text": "function Quaternion(u::UniformScaling{T}) where T\nfunction Quaternion{T}(u::UniformScaling) where T\n\nCreate the quaternion u.λ + 0.i + 0.j + 0.k.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#LinearAlgebra.norm-Tuple{Quaternion}",
    "page": "Library",
    "title": "LinearAlgebra.norm",
    "category": "method",
    "text": "@inline function norm(q::Quaternion)\n\nCompute the Euclidean norm of the quaternion q:\n\nsqrt(q0² + q1² + q2² + q3²)\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.angle2dcm",
    "page": "Library",
    "title": "ReferenceFrameRotations.angle2dcm",
    "category": "function",
    "text": "function angle2dcm(angle_r1::Number, angle_r2::Number, angle_r3::Number, rot_seq::Symbol = :ZYX)\n\nConvert the Euler angles angle_r1, angle_r2, and angle_r3 [rad] with the rotation sequence rot_seq to a direction cosine matrix.\n\nThe rotation sequence is defined by a :Symbol. The possible values are: :XYX, XYZ, :XZX, :XZY, :YXY, :YXZ, :YZX, :YZY, :ZXY, :ZXZ, :ZYX, and :ZYZ. If no value is specified, then it defaults to :ZYX.\n\nRemarks\n\nThis function assigns dcm = A3 * A2 * A1 in which Ai is the DCM related with the i-th rotation, i Є [1,2,3].\n\nExample\n\ndcm = angle2dcm(pi/2, pi/3, pi/4, :ZYX)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  3.06162e-17  0.5       -0.866025\n -0.707107     0.612372   0.353553\n  0.707107     0.612372   0.353553\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.angle2dcm-Tuple{EulerAngles}",
    "page": "Library",
    "title": "ReferenceFrameRotations.angle2dcm",
    "category": "method",
    "text": "function angle2dcm(eulerang::EulerAngles)\n\nConvert the Euler angles eulerang (see EulerAngles) to a direction cosine matrix.\n\nReturns\n\nThe direction cosine matrix.\n\nRemarks\n\nThis function assigns dcm = A3 * A2 * A1 in which Ai is the DCM related with the i-th rotation, i Є [1,2,3].\n\nExample\n\njulia> angle2dcm(EulerAngles(pi/2, pi/3, pi/4, :ZYX))\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  3.06162e-17  0.5       -0.866025\n -0.707107     0.612372   0.353553\n  0.707107     0.612372   0.353553\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.angle2quat",
    "page": "Library",
    "title": "ReferenceFrameRotations.angle2quat",
    "category": "function",
    "text": "function angle2quat(angle_r1::Number, angle_r2::Number, angle_r3::Number, rot_seq::AbstractString=\"ZYX\")\n\nConvert the Euler angles angle_r1, angle_r2, and angle_r3 [rad] with the rotation sequence rot_seq to a quaternion.\n\nThe rotation sequence is defined by a :Symbol. The possible values are: :XYX, XYZ, :XZX, :XZY, :YXY, :YXZ, :YZX, :YZY, :ZXY, :ZXZ, :ZYX, and :ZYZ. If no value is specified, then it defaults to :ZYX.\n\nRemarks\n\nThis function assigns q = q1 * q2 * q3 in which qi is the quaternion related with the i-th rotation, i Є [1,2,3].\n\nExample\n\njulia> angle2quat(pi/2, pi/3, pi/4, :ZYX)\nQuaternion{Float64}:\n  + 0.7010573846499779 - 0.09229595564125714.i + 0.5609855267969309.j + 0.43045933457687935.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.angle2quat-Tuple{EulerAngles}",
    "page": "Library",
    "title": "ReferenceFrameRotations.angle2quat",
    "category": "method",
    "text": "function angle2quat(eulerang::EulerAngles)\n\nConvert the Euler angles eulerang (see EulerAngles) to a quaternion.\n\nRemarks\n\nThis function assigns q = q1 * q2 * q3 in which qi is the quaternion related with the i-th rotation, i Є [1,2,3].\n\nExample\n\njulia> angle2quat(pi/2, pi/3, pi/4, :ZYX)\nQuaternion{Float64}:\n  + 0.7010573846499779 - 0.09229595564125714.i + 0.5609855267969309.j + 0.43045933457687935.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.angle2rot-Tuple{EulerAngles}",
    "page": "Library",
    "title": "ReferenceFrameRotations.angle2rot",
    "category": "method",
    "text": "function angle2rot([T,] angle_r1::Number, angle_r2::Number, angle_r3::Number, rot_seq::Symbol = :ZYX)\n\nConvert the Euler angles eulerang (see EulerAngles) to a rotation description of type T, which can be DCM or Quaternion. If the type T is not specified, then it defaults to DCM.\n\nExample\n\njulia> dcm = angle2rot(EulerAngles(pi/2, pi/3, pi/4, :ZYX))\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  3.06162e-17  0.5       -0.866025\n -0.707107     0.612372   0.353553\n  0.707107     0.612372   0.353553\n\njulia> q   = angle2rot(Quaternion,EulerAngles(pi/2, pi/3, pi/4, :ZYX))\nQuaternion{Float64}:\n  + 0.7010573846499779 - 0.09229595564125714.i + 0.5609855267969309.j +\n  0.43045933457687935.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.angle2rot-Tuple{Number,Number,Number,Symbol}",
    "page": "Library",
    "title": "ReferenceFrameRotations.angle2rot",
    "category": "method",
    "text": "function angle2rot([T,] angle_r1::Number, angle_r2::Number, angle_r3::Number, rot_seq::Symbol = :ZYX)\n\nConvert the Euler angles angle_r1, angle_r2, and angle_r3 [rad] with the rotation sequence rot_seq to a rotation description of type T, which can be DCM or Quaternion. If the type T is not specified, then it defaults to DCM.\n\nThe rotation sequence is defined by a :Symbol. The possible values are: :XYX, XYZ, :XZX, :XZY, :YXY, :YXZ, :YZX, :YZY, :ZXY, :ZXZ, :ZYX, and :ZYZ. If no value is specified, then it defaults to :ZYX.\n\nExample\n\njulia> dcm = angle2rot(pi/2, pi/3, pi/4, :ZYX)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  3.06162e-17  0.5       -0.866025\n -0.707107     0.612372   0.353553\n  0.707107     0.612372   0.353553\n\njulia> q   = angle2rot(Quaternion,pi/2, pi/3, pi/4, :ZYX)\nQuaternion{Float64}:\n  + 0.7010573846499779 - 0.09229595564125714.i + 0.5609855267969309.j + 0.43045933457687935.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.angleaxis2quat-Tuple{EulerAngleAxis}",
    "page": "Library",
    "title": "ReferenceFrameRotations.angleaxis2quat",
    "category": "method",
    "text": "function angleaxis2quat(angleaxis::EulerAngleAxis)\n\nConvert a Euler angle and Euler axis angleaxis (see EulerAngleAxis) to a quaternion.\n\nRemarks\n\nIt is expected that the vector angleaxis.v is unitary. However, no verification is performed inside the function. The user must handle this situation.\n\nExample\n\njulia> v = [1;1;1];\n\njulia> v /= norm(v);\n\njulia> angleaxis2quat(EulerAngleAxis(pi/2,v))\nQuaternion{Float64}:\n  + 0.7071067811865476 + 0.408248290463863.i + 0.408248290463863.j + 0.408248290463863.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.angleaxis2quat-Tuple{Number,AbstractArray{T,1} where T}",
    "page": "Library",
    "title": "ReferenceFrameRotations.angleaxis2quat",
    "category": "method",
    "text": "function angleaxis2quat(a::Number, v::AbstractVector)\n\nConvert the Euler angle a [rad] and Euler axis v, which must be a unit vector, to a quaternion.\n\nRemarks\n\nIt is expected that the vector v is unitary. However, no verification is performed inside the function. The user must handle this situation.\n\nExample\n\njulia> v = [1;1;1];\n\njulia> v /= norm(v);\n\njulia> angleaxis2quat(pi/2,v)\nQuaternion{Float64}:\n  + 0.7071067811865476 + 0.408248290463863.i + 0.408248290463863.j + 0.408248290463863.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.compose_rotation-Tuple{StaticArrays.SArray{Tuple{3,3},T,2,9} where T}",
    "page": "Library",
    "title": "ReferenceFrameRotations.compose_rotation",
    "category": "method",
    "text": "@inline function compose_rotation(R1, [, R2, R3, R4, R5, ...])\n\nCompute a composed rotation using the rotations R1, R2, R3, R4, ..., in the following order:\n\n First rotation\n |\n |\nR1 => R2 => R3 => R4 => ...\n       |\n       |\n       Second rotation\n\nThe rotations can be described by Direction Cosine Matrices or Quaternions. Notice, however, that all rotations must be of the same type (DCM or quaternion).\n\nThe output will have the same type as the inputs (DCM or quaternion).\n\nExample\n\njulia> D1 = angle2dcm(+pi/3,+pi/4,+pi/5,:ZYX);\n\njulia> D2 = angle2dcm(-pi/5,-pi/4,-pi/3,:XYZ);\n\njulia> compose_rotation(D1,D2)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n 1.0          0.0          5.55112e-17\n 0.0          1.0          5.55112e-17\n 5.55112e-17  5.55112e-17  1.0\n\njulia> q1 = angle2quat(+pi/3,+pi/4,+pi/5,:ZYX);\n\njulia> q2 = angle2quat(-pi/5,-pi/4,-pi/3,:XYZ);\n\njulia> compose_rotation(q1,q2)\nQuaternion{Float64}:\n  + 1.0 + 0.0.i + 2.0816681711721685e-17.j + 5.551115123125783e-17.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.create_rotation_matrix",
    "page": "Library",
    "title": "ReferenceFrameRotations.create_rotation_matrix",
    "category": "function",
    "text": "function create_rotation_matrix(angle::Number, axis::Symbol = :X)\n\nCompute a rotation matrix that rotates a coordinate frame about the axis axis by the angle angle. The axis must be one of the following symbols: :X, :Y, or :Z.\n\nExample\n\njulia> create_rotation_matrix(pi/2, :X)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n 1.0   0.0          0.0\n 0.0   6.12323e-17  1.0\n 0.0  -1.0          6.12323e-17\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.dcm2angle",
    "page": "Library",
    "title": "ReferenceFrameRotations.dcm2angle",
    "category": "function",
    "text": "function dcm2angle(dcm::DCM, rot_seq::Symbol=:ZYX)\n\nConvert the DCM dcm to Euler Angles (see EulerAngles) given a rotation sequence rot_seq.\n\nThe rotation sequence is defined by a :Symbol. The possible values are: :XYX, XYZ, :XZX, :XZY, :YXY, :YXZ, :YZX, :YZY, :ZXY, :ZXZ, :ZYX, and :ZYZ. If no value is specified, then it defaults to :ZYX.\n\nExample\n\njulia> D = DCM([1. 0. 0.; 0. 0. -1; 0. -1 0.]);\n\njulia> dcm2angle(D,:XYZ)\nReferenceFrameRotations.EulerAngles{Float64}(1.5707963267948966, 0.0, -0.0, :XYZ)\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.dcm2quat-Tuple{StaticArrays.SArray{Tuple{3,3},T,2,9} where T}",
    "page": "Library",
    "title": "ReferenceFrameRotations.dcm2quat",
    "category": "method",
    "text": "function dcm2quat(dcm::DCM)\n\nConvert the DCM dcm to a quaternion. The type of the quaternion will be automatically selected by the constructor Quaternion to avoid InexactError.\n\nRemarks\n\nBy convention, the real part of the quaternion will always be positive. Moreover, the function does not check if dcm is a valid direction cosine matrix. This must be handle by the user.\n\nThis algorithm was obtained from:\n\nhttp://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/\n\nExample\n\njulia> dcm = angle2dcm(pi/2,0.0,0.0,:XYZ);\n\njulia> q   = dcm2quat(dcm)\nQuaternion{Float64}:\n  + 0.7071067811865476 + 0.7071067811865475.i + 0.0.j + 0.0.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.ddcm-Tuple{StaticArrays.SArray{Tuple{3,3},T,2,9} where T,AbstractArray}",
    "page": "Library",
    "title": "ReferenceFrameRotations.ddcm",
    "category": "method",
    "text": "function ddcm(Dba::DCM, wba_b::AbstractArray)\n\nCompute the time-derivative of the DCM dcm that rotates a reference frame a into alignment to the reference frame b in which the angular velocity of b with respect to a, and represented in b, is wba_b.\n\nReturns\n\nThe time-derivative of the DCM Dba (3x3 matrix of type SMatrix{3,3}).\n\nExample\n\njulia> D = DCM(Matrix{Float64}(I,3,3));\n\njulia> ddcm(D,[1;0;0])\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n 0.0   0.0  0.0\n 0.0   0.0  1.0\n 0.0  -1.0  0.0\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.dquat-Tuple{Quaternion,AbstractArray{T,1} where T}",
    "page": "Library",
    "title": "ReferenceFrameRotations.dquat",
    "category": "method",
    "text": "function dquat(qba::Quaternion, wba_b::AbstractVector)\n\nCompute the time-derivative of the quaternion qba that rotates a reference frame a into alignment to the reference frame b in which the angular velocity of b with respect to a, and represented in b, is wba_b.\n\nExample\n\njulia> q = Quaternion(1.0I);\n\njulia> dquat(q,[1;0;0])\nQuaternion{Float64}:\n  + 0.0 + 0.5.i + 0.0.j + 0.0.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.inv_rotation-Tuple{StaticArrays.SArray{Tuple{3,3},T,2,9} where T}",
    "page": "Library",
    "title": "ReferenceFrameRotations.inv_rotation",
    "category": "method",
    "text": "@inline function inv_rotation(R)\n\nCompute the inverse rotation of R, which can be a Direction Cosine Matrix or Quaternion.\n\nThe output will have the same type as R (DCM or quaternion).\n\nRemarks\n\nIf R is a DCM, than its transpose is computed instead of its inverse to reduce the computational burden. The both are equal if the DCM has unit norm. This must be verified by the used.\n\nIf R is a quaternion, than its conjugate is computed instead of its inverse to reduce the computational burden. The both are equal if the quaternion has unit norm. This must be verified by the used.\n\nExample\n\njulia> D = angle2dcm(+pi/3,+pi/4,+pi/5,:ZYX);\n\njulia> inv_rotation(D)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  0.353553  -0.492816  0.795068\n  0.612372   0.764452  0.201527\n -0.707107   0.415627  0.572061\n\njulia> q = angle2quat(+pi/3,+pi/4,+pi/5,:ZYX);\n\njulia> inv_rotation(q)\nQuaternion{Float64}:\n  + 0.8200711519756747 - 0.06526868310243991.i - 0.45794027732580056.j - 0.336918398289752.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.quat2angle",
    "page": "Library",
    "title": "ReferenceFrameRotations.quat2angle",
    "category": "function",
    "text": "function quat2angle(q::Quaternion, rot_seq::Symbol = :ZYX)\n\nConvert the quaternion q to Euler Angles (see EulerAngles) given a rotation sequence rot_seq.\n\nThe rotation sequence is defined by a :Symbol. The possible values are: :XYX, XYZ, :XZX, :XZY, :YXY, :YXZ, :YZX, :YZY, :ZXY, :ZXZ, :ZYX, and :ZYZ. If no value is specified, then it defaults to :ZYX.\n\nExample\n\njulia> q = Quaternion(cosd(45/2), sind(45/2), 0, 0);\n\njulia> quat2angle(q,:XYZ)\nEulerAngles{Float64}(0.7853981633974484, 0.0, -0.0, :XYZ)\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.quat2angleaxis-Union{Tuple{Quaternion{T}}, Tuple{T}} where T",
    "page": "Library",
    "title": "ReferenceFrameRotations.quat2angleaxis",
    "category": "method",
    "text": "function quat2angleaxis(q::Quaternion{T}) where T\n\nConvert the quaternion q to a Euler angle and axis representation (see EulerAngleAxis).\n\nRemarks\n\nThis function will not fail if the quaternion norm is not 1. However, the meaning of the results will not be defined, because the input quaternion does not represent a 3D rotation. The user must handle such situations.\n\nExample\n\njulia> q = Quaternion(cosd(45/2), sind(45/2), 0, 0);\n\njulia> quat2angleaxis(q)\nEulerAngleAxis{Float64}(0.7853981633974484, [1.0, 0.0, 0.0])\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.quat2dcm-Tuple{Quaternion}",
    "page": "Library",
    "title": "ReferenceFrameRotations.quat2dcm",
    "category": "method",
    "text": "function quat2dcm(q::Quaternion)\n\nConvert the quaternion q to a Direction Cosine Matrix (DCM).\n\nExample\n\njulia> q = Quaternion(cosd(45/2), sind(45/2), 0, 0);\n\njulia> quat2dcm(q)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n 1.0   0.0       0.0\n 0.0   0.707107  0.707107\n 0.0  -0.707107  0.707107\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.smallangle2dcm-Tuple{Number,Number,Number}",
    "page": "Library",
    "title": "ReferenceFrameRotations.smallangle2dcm",
    "category": "method",
    "text": "function smallangle2dcm(θx::Number, θy::Number, θz::Number)\n\nCreate a direction cosine matrix from three small rotations of angles θx, θy, and θz [rad] about the axes X, Y, and Z, respectively.\n\nRemarks\n\nNo process of ortho-normalization is performed with the computed DCM.\n\nExample\n\njulia> smallangle2dcm(+0.01, -0.01, +0.01)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  1.0    0.01  0.01\n -0.01   1.0   0.01\n -0.01  -0.01  1.0\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.smallangle2quat-Tuple{Number,Number,Number}",
    "page": "Library",
    "title": "ReferenceFrameRotations.smallangle2quat",
    "category": "method",
    "text": "function smallangle2quat(θx::Number, θy::Number, θz::Number)\n\nCreate a quaternion from three small rotations of angles θx, θy, and θz [rad] about the axes X, Y, and Z, respectively.\n\nRemarks\n\nThe quaternion is normalized.\n\nExample\n\njulia> smallangle2quat(+0.01, -0.01, +0.01)\nQuaternion{Float64}:\n  + 0.9999625021092433 + 0.004999812510546217.i - 0.004999812510546217.j + 0.004999812510546217.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.smallangle2rot-Tuple{Number,Number,Number}",
    "page": "Library",
    "title": "ReferenceFrameRotations.smallangle2rot",
    "category": "method",
    "text": "function smallangle2rot([T,] θx::Number, θy::Number, θz::Number)\n\nCreate a rotation description of type T from three small rotations of angles θx, θy, and θz [rad] about the axes X, Y, and Z, respectively.\n\nThe type T of the rotation description can be DCM or Quaternion. If the type T is not specified, then if defaults to DCM.\n\nReturns\n\nThe rotation description according to the type T.\n\nExample\n\njulia> dcm = smallangle2rot(+0.01, -0.01, +0.01);\n\njulia> q   = smallangle2rot(Quaternion,+0.01, -0.01, +0.01);\n\njulia> dcm = smallangle2rot(+0.01, -0.01, +0.01)\n3×3 StaticArrays.SArray{Tuple{3,3},Float64,2,9}:\n  1.0    0.01  0.01\n -0.01   1.0   0.01\n -0.01  -0.01  1.0\n\njulia> q   = smallangle2rot(Quaternion,+0.01, -0.01, +0.01)\nQuaternion{Float64}:\n  + 0.9999625021092433 + 0.004999812510546217.i - 0.004999812510546217.j + 0.004999812510546217.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#ReferenceFrameRotations.vect-Tuple{Quaternion}",
    "page": "Library",
    "title": "ReferenceFrameRotations.vect",
    "category": "method",
    "text": "@inline function vect(q::Quaternion)\n\nReturn the vectorial or imaginary part of the quaternion q represented by a 3 × 1 vector of type SVector{3}.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.:*-Tuple{AbstractArray{T,1} where T,Quaternion}",
    "page": "Library",
    "title": "Base.:*",
    "category": "method",
    "text": "@inline function *(v::AbstractVector, q::Quaternion)\n@inline function *(q::Quaternion, v::AbstractVector)\n\nCompute the multiplication qv*q or q*qv in which qv is a quaternion with real part 0 and vectorial/imaginary part v (Hamilton product).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.:*-Tuple{LinearAlgebra.UniformScaling,Quaternion}",
    "page": "Library",
    "title": "Base.:*",
    "category": "method",
    "text": "@inline function *(u::UniformScaling, q::Quaternion)\n@inline function *(q::Quaternion, u::UniformScaling)\n\nCompute qu*q or q*qu (Hamilton product), in which qu is the scaled identity quaternion qu = u.λ * I.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.:*-Tuple{Number,Quaternion}",
    "page": "Library",
    "title": "Base.:*",
    "category": "method",
    "text": "@inline function *(λ::Number, q::Quaternion)\n@inline function *(q::Quaternion, λ::Number)\n\nCompute λ*q or q*λ, in which λ is a scalar.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.:*-Tuple{Quaternion,Quaternion}",
    "page": "Library",
    "title": "Base.:*",
    "category": "method",
    "text": "@inline function *(q1::Quaternion, q2::Quaternion)\n\nCompute the quaternion multiplication q1*q2 (Hamilton product).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.:+-Tuple{LinearAlgebra.UniformScaling,Quaternion}",
    "page": "Library",
    "title": "Base.:+",
    "category": "method",
    "text": "@inline function +(u::UniformScaling, q::Quaternion)\n@inline function +(q::Quaternion, u::UniformScaling)\n\nCompute qu + q or q + qu, in which qu is the scaled identity quaternion qu = u.λ * I.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.:+-Tuple{Quaternion,Quaternion}",
    "page": "Library",
    "title": "Base.:+",
    "category": "method",
    "text": "@inline function +(qa::Quaternion, qb::Quaternion)\n\nCompute qa + qb.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.:--Tuple{LinearAlgebra.UniformScaling,Quaternion}",
    "page": "Library",
    "title": "Base.:-",
    "category": "method",
    "text": "@inline function -(u::UniformScaling, q::Quaternion)\n@inline function -(q::Quaternion, u::UniformScaling)\n\nCompute qu - q or q - qu, in which qu is the scaled identity quaternion qu = u.λ * I.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.:--Tuple{Quaternion,Quaternion}",
    "page": "Library",
    "title": "Base.:-",
    "category": "method",
    "text": "@inline function -(qa::Quaternion, qb::Quaternion)\n\nCompute qa - qb.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.:/-Tuple{LinearAlgebra.UniformScaling,Quaternion}",
    "page": "Library",
    "title": "Base.:/",
    "category": "method",
    "text": "@inline function /(u::UniformScaling, q::Quaternion)\n@inline function /(q::Quaternion, u::UniformScaling)\n\nCompute qu/q or q/qu (Hamilton product), in which qu is the scaled identity quaternion qu = u.λ * I.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.:/-Tuple{Number,Quaternion}",
    "page": "Library",
    "title": "Base.:/",
    "category": "method",
    "text": "@inline function /(λ::Number, q::Quaternion)\n@inline function /(q::Quaternion, λ::Number)\n\nCompute the division λ/q or q/λ, in which λ is a scalar.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.:/-Tuple{Quaternion,Quaternion}",
    "page": "Library",
    "title": "Base.:/",
    "category": "method",
    "text": "@inline /(q1::Quaternion, q2::Quaternion) = q1*inv(q2)\n\nCompute q1*inv(q2) (Hamilton product).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.:\\-Tuple{LinearAlgebra.UniformScaling,Quaternion}",
    "page": "Library",
    "title": "Base.:\\",
    "category": "method",
    "text": "@inline function \\(u::UniformScaling, q::Quaternion)\n@inline function \\(q::Quaternion, u::UniformScaling)\n\nCompute inv(qu)*q or inv(q)*qu (Hamilton product), in which qu is the scaled identity quaternion qu = u.λ * I.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.:\\-Tuple{Quaternion,AbstractArray{T,1} where T}",
    "page": "Library",
    "title": "Base.:\\",
    "category": "method",
    "text": "@inline \\(q::Quaternion, v::AbstractVector)\n@inline \\(v::AbstractVector, q::Quaternion)\n\nCompute inv(q)*qv or inv(qv)*q in which qv is a quaternion with real part 0 and vectorial/imaginary part v (Hamilton product).\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.:\\-Tuple{Quaternion,Quaternion}",
    "page": "Library",
    "title": "Base.:\\",
    "category": "method",
    "text": "@inline \\(q1::Quaternion, q2::Quaternion) = inv(q1)*q2\n\nCompute inv(q1)*q2.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.conj-Tuple{Quaternion}",
    "page": "Library",
    "title": "Base.conj",
    "category": "method",
    "text": "@inline function conj(q::Quaternion)\n\nCompute the complex conjugate of the quaternion q:\n\nq0 - q1.i - q2.j - q3.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.copy-Union{Tuple{Quaternion{T}}, Tuple{T}} where T",
    "page": "Library",
    "title": "Base.copy",
    "category": "method",
    "text": "@inline function copy(q::Quaternion{T}) where T\n\nCreate a copy of the quaternion q.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.getindex-Tuple{Quaternion,Colon}",
    "page": "Library",
    "title": "Base.getindex",
    "category": "method",
    "text": "@inline function getindex(q::Quaternion, ::Colon)\n\nTransform the quaternion into a 4x1 vector of type T.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.imag-Tuple{Quaternion}",
    "page": "Library",
    "title": "Base.imag",
    "category": "method",
    "text": "@inline function imag(q::Quaternion)\n\nReturn the vectorial or imaginary part of the quaternion q represented by a 3 × 1 vector of type SVector{3}.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.inv-Tuple{Quaternion}",
    "page": "Library",
    "title": "Base.inv",
    "category": "method",
    "text": "@inline function inv(q::Quaternion)\n\nCompute the inverse of the quaternion q:\n\nconj(q)\n-------\n  |q|²\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.real-Tuple{Quaternion}",
    "page": "Library",
    "title": "Base.real",
    "category": "method",
    "text": "@inline function real(q::Quaternion)\n\nReturn the real part of the quaternion q: q0.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.show-Union{Tuple{T}, Tuple{IO,Quaternion{T}}} where T",
    "page": "Library",
    "title": "Base.show",
    "category": "method",
    "text": "function show(io::IO, q::Quaternion{T}) where T\n\nPrint the quaternion q to the stream io.\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.zeros-Union{Tuple{Quaternion{T}}, Tuple{T}} where T",
    "page": "Library",
    "title": "Base.zeros",
    "category": "method",
    "text": "@inline function zeros(q::Quaternion{T}) where T\n\nCreate the null quaternion with the same type T of another quaternion q:\n\nT(0) + T(0).i + T(0).j + T(0).k\n\nExample\n\njulia> q1 = Quaternion{Float32}(cosd(45/2),sind(45/2),0,0);\n\njulia> zeros(q1)\nQuaternion{Float32}:\n  + 0.0 + 0.0.i + 0.0.j + 0.0.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Base.zeros-Union{Tuple{Type{Quaternion{T}}}, Tuple{T}} where T",
    "page": "Library",
    "title": "Base.zeros",
    "category": "method",
    "text": "@inline function zeros(::Type{Quaternion{T}}) where T\n\nCreate the null quaternion of type T:\n\nT(0) + T(0).i + T(0).j + T(0).k\n\nIf the type T is omitted, then it defaults to Float64.\n\nExample\n\njulia> zeros(Quaternion{Float32})\nQuaternion{Float32}:\n  + 0.0 + 0.0.i + 0.0.j + 0.0.k\n\njulia> zeros(Quaternion)\nQuaternion{Float64}:\n  + 0.0 + 0.0.i + 0.0.j + 0.0.k\n\n\n\n\n\n"
},

{
    "location": "lib/library/#Library-1",
    "page": "Library",
    "title": "Library",
    "category": "section",
    "text": "Documentation for ReferenceFrameRotations.jl.Modules = [ReferenceFrameRotations]"
},

]}
