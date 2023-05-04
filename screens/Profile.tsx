// import * as React from 'react';
// import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

interface ProfileData {
    name: string;
    phoneNumber: string;
    major: string;
    graduationDate: string;
    employers: string[];
}

const Profile: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData>({
        name: 'John Doe',
        phoneNumber: '123-456-7890',
        major: 'Computer Science',
        graduationDate: 'May 2022',
        employers: ['ABC Company', 'XYZ Corporation'],
    });

    const handleInputChange = (field: keyof ProfileData, value: string) => {
        setProfileData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleAddEmployer = () => {
        setProfileData({
            ...profileData,
            employers: [...profileData.employers, { name: '' }],
        });
    };

    const handleRemoveEmployer = () => {
        profileData.employers.splice(profileData.employers.length - 1, 1);
        setProfileData({
            ...profileData,
        });
    };

    const handleSave = () => {
        // Save the profile data in the frontend or send to backend API
        setIsEditing(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                    style={styles.input}
                    value={profileData.name}
                    editable={isEditing}
                    onChangeText={(text) => handleInputChange('name', text)}
                />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Phone Number:</Text>
                <TextInput
                    style={styles.input}
                    value={profileData.phoneNumber}
                    editable={isEditing}
                    onChangeText={(text) => handleInputChange('phoneNumber', text)}
                />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Major:</Text>
                <TextInput
                    style={styles.input}
                    value={profileData.major}
                    editable={isEditing}
                    onChangeText={(text) => handleInputChange('major', text)}
                />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Graduation Date:</Text>
                <TextInput
                    style={styles.input}
                    value={profileData.graduationDate}
                    editable={isEditing}
                    onChangeText={(text) => handleInputChange('graduationDate', text)}
                />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Previous/Current Employers:</Text>
                {profileData.employers.map((employer, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        value={employer.name}
                        editable={isEditing}
                        onChangeText={(text) => {
                            const updatedEmployers = [...profileData.employers];
                            updatedEmployers[index] = { name: text };
                            handleInputChange('employers', updatedEmployers);
                        }}
                    />
                ))}
                {isEditing && (
                    <TouchableOpacity style={styles.employerAddButton} onPress={handleAddEmployer}>
                        <Text style={styles.buttonText}>Add Employer</Text>
                    </TouchableOpacity>
                )}
                {isEditing && (
                    <TouchableOpacity style={styles.employerRemoveButton} onPress={handleRemoveEmployer}>
                        <Text style={styles.buttonText}>Remove Employer</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.buttonContainer}>
                {isEditing ? (
                    <TouchableOpacity style={styles.button} onPress={handleSave}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.button} onPress={() => setIsEditing(true)}>
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
        title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
        fieldContainer: {
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    employerAddButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    employerRemoveButton: {
        backgroundColor: '#C02200',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Profile;

